<?php

session_start();

// initialize cart
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// initialize wish list
if (!isset($_SESSION['wishlist'])) {
    $_SESSION['wishlist'] = array();
}
