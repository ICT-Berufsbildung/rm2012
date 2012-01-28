<?php

/**
 * Home page
 */

require_once 'includes/webshop.php';

$model = new Category($database);
$categories = $model->all();

require 'views/home.php';
