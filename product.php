<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/textile.php';
require_once 'includes/webshop.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$products = new Products($database);
$product = $products->get($id);

if (!$product) {    
    header('Location: ./'); // redirect to home if product is not found
}

$statement = $database->prepare('SELECT * FROM `categories` WHERE `id` = ?');
$statement->execute(array($product['category']));
$category = $statement->fetch();

require 'views/product.php';
