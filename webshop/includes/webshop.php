<?php

require_once 'includes/session.php';
require_once 'includes/competitor.php';
require_once 'includes/database.php';
require_once 'includes/textile.php';


/**
 * Exception for shop errors.
 */
class ShopException extends Exception {

    /**
     * @var array Errors
     */
    protected $errors;

    public function __construct($errors) {
        $this->errors = $errors;
    }

    /**
     * @return array Errors
     */
    public function getErrors() {
        return $this->errors;
    }
}

/**
 * Model to create order.
 */
class Order extends Model {

    /**
     * @var array Order values
     */
    protected $values;

    /**
     * @var Cart
     */
    protected $cart;

    public function __construct(PDO $database, Cart $cart, array $values) {
        parent::__construct($database);

        $this->cart = $cart;
        $this->values = $values;
    }

    /**
     * @param string $field Field name
     * @return string
     */
    public function value($field) {
        return isset($this->values[$field]) ? trim($this->values[$field]) : '';
    }

    /**
     * @throws ShopException
     */
    public function save() {

        $errors = array();

        // validate prename
        $prename = $this->value('prename');
        if ('' == $prename) {
            $errors['prename'] = 'Please fill out this field.';
        }

        // validate surname
        $surname = $this->value('surname');
        if ('' == $surname) {
            $errors['surname'] = 'Please fill out this field.';
        }

        // validate address
        $address = $this->value('address');
        if ('' == $address) {
            $errors['address'] = 'Please fill out this field.';
        }

        // validate zip
        $zip = $this->value('zip');
        if ('' == $zip) {
            $errors['zip'] = 'Please fill out this field.';
        }

        // validate city
        $city = $this->value('city');
        if ('' == $city) {
            $errors['city'] = 'Please fill out this field.';
        }

        // validate phone number
        $phone = $this->value('phone');
        if ('' == $phone) {
            $errors['phone'] = 'Please fill out this field.';
        } else if (preg_match('/^([0-9\(\)\/\+ \-]*)$/', $phone) === 0) {
            $errors['phone'] = 'Please fill in a valid phone number.';
        }

        // validate email
        $email = $this->value('email');
        if ('' == $email) {
            $errors['email'] = 'Please fill out this field.';
        } else if (strpos($email, '@') === false) {
            $errors['email'] = 'Please fill in a valid email address.';
        }

        // check if any validation error occured
        if (count($errors) > 0) {

            // validation error
            throw new ShopException($errors);
        }

        // validation passed, save order
        $this->database->beginTransaction();

        $statement = $this->database->prepare('INSERT INTO `order` (`created`, `prename`, `surname`, `address`, `zip`, `city`, `phone`, `email`) VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?)');
        $statement->execute(array($prename, $surname, $address, $zip, $city, $phone, $email));
        $order = $this->database->lastInsertId();

        foreach ($this->cart->summary() as $product) {

            $statement = $this->database->prepare('INSERT INTO `order_product` (`order`, `product`, `price`, `qty`) VALUES (?, ?, ?, ?)');
            $statement->execute(array($order, $product['id'], $product['price'], $product['qty']));
        }

        $this->database->commit();

        return $order;
    }
}

/**
 * Model to fetch products from the database.
 */
class Product extends Model {

    /**
     * Get a product by its ID.
     *
     * @param int $id ID of the product
     * @return array Product data
     */
    public function get($id) {
        $statement = $this->database->prepare('SELECT * FROM `product` WHERE `id` = ?');
        $statement->execute(array($id));
        return $statement->fetch();
    }

    /**
     * Get a random product.
     *
     * @return array Product data
     */
    public function random() {
        $statement = $this->database->query('SELECT * FROM `product` ORDER BY RAND() LIMIT 1');
        return $statement->fetch();
    }

    /**
     * Fetches all products for the passed IDs into an array.
     *
     * @param array $id IDs of the products
     * @return array Products
     */
    public function some($ids) {

        if (count($ids) == 0) {
            return $ids;
        }

        // quote ids
        foreach ($ids as $k => $id) {
            $ids[$k] = $this->database->quote($id);
        }
        $ids = implode(',', $ids);

        $statement = $this->database->query('SELECT * FROM `product` WHERE `id` IN (' . $ids . ')');
        return $statement->fetchAll();
    }

    /**
     * Fetches all products from a category.
     *
     * @param int $id ID of the category
     * @return array Products
     */
    public function category($category) {
        $statement = $this->database->prepare('SELECT * FROM `product` WHERE `category` = ?');
        $statement->execute(array($category));
        return $statement->fetchAll();
    }
}

/**
 * Model to fetch categories from the database.
 */
class Category extends Model {

    /**
     * Get a category by its ID.
     *
     * @param int $id ID of the category
     * @return array Category data
     */
    public function get($id) {
        $statement = $this->database->prepare('SELECT * FROM `category` WHERE `id` = ?');
        $statement->execute(array($id));
        return $statement->fetch();
    }

    /**
     * Fetch all categories
     *
     * @return array Categories
     */
    public function all() {
        $statement = $this->database->prepare('SELECT * FROM `category`');
        $statement->execute();
        return $statement->fetchAll();
    }
}

/**
 * Abstract model for database access.
 */
abstract class Model {

    /**
     * @var PDO Database connection
     */
    protected $database;

    public function __construct(PDO $database) {
        $this->database = $database;
    }
}

/**
 * Cart model for cart operations.
 */
class Cart {

    /**
     * @var array Cart array
     */
    protected $cart;

    /**
     * @var Product Product model
     */
    protected $product;

    /**
     * @var int Total
     */
    protected $total;

    /**
     * @var array $cart Cart array
     * @var Product $product Product model
     */
    public function __construct(array $cart, Product $product) {
        $this->cart = $cart;
        $this->product = $product;
    }

    /**
     * Returns all products in cart with their qty and row total.
     *
     * @return array Products
     */
    public function summary() {

        $summary = $this->product->some(array_keys($this->cart));

        // calculate total
        $this->total = 0;
        foreach ($summary as &$product) {

            // calculate row total
            $qty = $this->cart[$product['id']];
            $rowTotal = number_format($qty * $product['price'], 2);

            // add quantity and row total to product
            $product['qty'] = $qty;
            $product['row_total'] = $rowTotal;

            $this->total += $rowTotal;
        }
        $this->total = number_format($this->total, 2);

        return $summary;
    }

    /**
     * @return float
     */
    public function getTotal() {
        return $this->total;
    }
}

