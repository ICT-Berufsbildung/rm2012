<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$products = new Products($database);
$cart = $products->some(array_keys($_SESSION['cart']));

$total = 0;
foreach ($cart as &$product) {

    $qty = $_SESSION['cart'][$product['id']];
    $rowTotal = number_format($qty * $product['price'], 2);

    $product['qty'] = $qty;
    $product['row_total'] = $rowTotal;

    $total += $rowTotal;
}
$total = number_format($total, 2);

require 'views/cart.php';
