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

$categories = new Products($database);
$category = $categories->get($product['category']);

require 'views/product.php';
