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

$statement = $database->prepare('SELECT * FROM `products` WHERE `category` = ?');
$statement->execute(array($category['id']));
$products = $statement->fetchAll();

require 'views/category.php';
