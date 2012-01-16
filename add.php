<?php

/*
 * Add product to cart.
 */

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

// product id
$id = isset($_POST['id']) ? (int) $_POST['id'] : 0;

// init cart for product
if (!isset($_SESSION['cart'][$id])) {
    $_SESSION['cart'][$id] = 0;
}

// increase product qty
$_SESSION['cart'][$id]++;

// notify user
$_SESSION['success'] = 'Das Produkt wurde in den Warenkorb gelegt.';

// redirect to cart
session_commit();
header('Location: cart.php');
