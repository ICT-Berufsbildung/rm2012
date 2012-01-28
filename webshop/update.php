<?php

/**
 * Update cart.
 */

require_once 'includes/webshop.php';

// new cart quantities
$cart = isset($_POST['cart']) && is_array($_POST['cart']) ? $_POST['cart'] : array();

// reset cart
$_SESSION['cart'] = array();

// add new quantities to cart
foreach ($cart as $product => $qty) {

    // only add quantities higher than 0
    if ($qty > 0) {

        $_SESSION['cart'][(int) $product] = (int) $qty;
    }
}

// notify user
$_SESSION['success'] = 'Your cart has been updated.';

// redirect back to cart
session_commit();
header('Location: cart.php');
