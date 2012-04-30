<?php

/**
 * Remove item from cart.
 */

require_once 'includes/webshop.php';

// product id
$id = isset($_GET['id']) ? $_GET['id'] : 0;

// remove product
unset($_SESSION['cart'][(int) $id]);

// redirect back to cart
session_commit();
header('Location: cart.php');
