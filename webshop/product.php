<?php

/*
 * Product page
 */

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/textile.php';
require_once 'includes/webshop.php';

// product id
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// load product
$products = new Products($database);
$product = $products->get($id);

// redirect to home if product is not found
if (!$product) {    
    header('Location: ./');
}

// load category for breadcrumb
$categories = new Categories($database);
$category = $categories->get($product['category']);

// render product view
require 'views/product.php';
