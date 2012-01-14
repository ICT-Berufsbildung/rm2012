<?php

require_once 'includes/session.php';
require_once 'includes/database.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$statement = $database->prepare('SELECT * FROM `categories` WHERE `id` = ?');
$statement->execute(array($id));
$category = $statement->fetch();

if (!$category) {    
    header('Location: ./'); // redirect to home if category is not found
}

$statement = $database->prepare('SELECT * FROM `products` WHERE `category` = ?');
$statement->execute(array($category['id']));
$products = $statement->fetchAll();

require 'views/category.php';
