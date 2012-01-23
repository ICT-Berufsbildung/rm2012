<?php

/*
 * Checkout
 */

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

// load all products in cart
$model = new Product($database);
$cart = new Cart($_SESSION['cart'], $model);
$summary = $cart->summary();
$total = $cart->getTotal();

// redirect to cart if empty
if ($total == 0) {
    header('Location: cart.php');
}

// render checkout view
require 'views/checkout.php';
