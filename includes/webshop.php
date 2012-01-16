<?php

/**
 * Model to fetch products from the database.
 */
class Products extends Model {

    /**
     * Get a product by its ID.
     *
     * @param int $id ID of the product
     * @return array Product data
     */
    public function get($id) {
        $statement = $this->database->prepare('SELECT * FROM `products` WHERE `id` = ?');
        $statement->execute(array($id));
        return $statement->fetch();
    }

    /**
     * Fetches all products for the passed IDs into an array.
     *
     * @param array $id IDs of the products
     * @return array Products
     */
    public function some($ids) {

        // quote ids
        foreach ($ids as $k => $id) {
            $ids[$k] = $this->database->quote($id);
        }
        $ids = implode(',', $ids);

        $statement = $this->database->prepare('SELECT * FROM `products` WHERE `id` IN (' . $ids . ')');
        $statement->execute(array());
        return $statement->fetchAll();
    }

    /**
     * Fetches all products from a category.
     *
     * @param int $id ID of the category
     * @return array Products
     */
    public function category($category) {
        $statement = $this->database->prepare('SELECT * FROM `products` WHERE `category` = ?');
        $statement->execute(array($category));
        return $statement->fetchAll();
    }
}

/**
 * Model to fetch categories from the database.
 */
class Categories extends Model {

    /**
     * Get a category by its ID.
     *
     * @param int $id ID of the category
     * @return array Category data
     */
    public function get($id) {
        $statement = $this->database->prepare('SELECT * FROM `categories` WHERE `id` = ?');
        $statement->execute(array($id));
        return $statement->fetch();
    }

    /**
     * Fetch all categories
     *
     * @return array Categories
     */
    public function all() {
        $statement = $this->database->prepare('SELECT * FROM `categories`');
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
     * @var Products Products model
     */
    protected $products;

    /**
     * @var int Total
     */
    protected $total;

    /**
     * @var array $cart Cart array
     * @var Products $procuts Products model
     */
    public function __construct(array $cart, Products $products) {
        $this->cart = $cart;
        $this->products = $products;
    }

    /**
     * Returns all products in cart with their qty and row total.
     *
     * @return array Products
     */
    public function summary() {

        $summary = $this->products->some(array_keys($this->cart));

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

