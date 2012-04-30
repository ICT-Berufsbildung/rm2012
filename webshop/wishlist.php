<?php

/**
 * Wish list
 */

require_once 'includes/webshop.php';

$wishlist = isset($_GET['products']) ? array_keys($_GET['products']) : array();

// load all products in wish list
$model = new Product($database);
$products = $model->some($wishlist);

// render cart view
require 'views/wishlist.php';
