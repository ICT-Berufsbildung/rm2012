<?php

/*
 * Shopping cart
 */

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

// load all products in cart
$products = new Products($database);
$cart = new Cart($_SESSION['cart'], $products);
$summary = $cart->summary();
$total = $cart->getTotal();

// render cart view
require 'views/cart.php';
