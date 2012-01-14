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
