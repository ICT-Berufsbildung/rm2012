<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$categories = new Categories($database);
$category = $categories->get($id);

if (!$category) {    
    header('Location: ./'); // redirect to home if category is not found
}

$model = new Products($database);
$products = $model->category($category['id']);

require 'views/category.php';
