<?php

session_start();

// initialize cart
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}
