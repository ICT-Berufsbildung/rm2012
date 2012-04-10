<?php

/**
 * Home page
 */

require_once 'includes/webshop.php';

$model = new Category($database);
$categories = $model->all();

$model = new Product($database);
$product = $model->random();

require 'views/home.php';
