<?php

/**
 * Product page
 */

require_once 'includes/webshop.php';

// product id
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// load product
$model = new Product($database);
$product = $model->get($id);

// redirect to home if product is not found
if (!$product) {
    $_SESSION['error'] = 'Unknown product is unknown.';
    session_commit();
    header('Location: ./');
}

// load category for breadcrumb
$model = new Category($database);
$category = $model->get($product['category']);

// render product view
require 'views/product.php';
