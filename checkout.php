<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$products = new Products($database);
$cart = new Cart($_SESSION['cart'], $products);
$summary = $cart->summary();
$total = $cart->getTotal();

if ($total == 0) {
    header('Location: cart.php'); // nothing in cart
}

require 'views/checkout.php';
