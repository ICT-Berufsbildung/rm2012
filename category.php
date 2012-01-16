<?php

/*
 * Category page
 */

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

// category id
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// load category
$categories = new Categories($database);
$category = $categories->get($id);

// redirect to home if category is not found
if (!$category) {    
    header('Location: ./');
}

// load category products
$model = new Products($database);
$products = $model->category($category['id']);

// render category view
require 'views/category.php';
