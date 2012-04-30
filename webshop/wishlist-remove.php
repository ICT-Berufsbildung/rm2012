<?php

/**
 * Remove item from wish list.
 */

require_once 'includes/webshop.php';

// product id
$id = isset($_GET['id']) ? $_GET['id'] : 0;

// remove product
unset($_SESSION['wishlist'][(int) $id]);

// build persistent wishlist
$wishlist = http_build_query(array('products' => $_SESSION['wishlist']));

// redirect back to cart
session_commit();
header('Location: wishlist.php?' . $wishlist);
