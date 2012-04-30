<?php

/**
 * Add product to wish list.
 */

require_once 'includes/webshop.php';

// product id
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// init wish list for product
if (!isset($_SESSION['wishlist'][$id])) {
    $_SESSION['wishlist'][$id] = 1;
}

// build persistent wishlist
$wishlist = http_build_query(array('products' => $_SESSION['wishlist']));

// notify user
$_SESSION['success'] = 'The product has been added to your wish list.';

// redirect to wish list
session_commit();
header('Location: wishlist.php?' . $wishlist);
