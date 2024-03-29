<?php

/**
 * Shopping cart
 */

require_once 'includes/webshop.php';

// load all products in cart
$model = new Product($database);
$cart = new Cart($_SESSION['cart'], $model);
$summary = $cart->summary();
$total = $cart->getTotal();

// render cart view
require 'views/cart.php';
