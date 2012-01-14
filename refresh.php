<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$cart = isset($_POST['cart']) && is_array($_POST['cart']) ? $_POST['cart'] : array();

$_SESSION['cart'] = array();
foreach ($cart as $product => $qty) {

    if ($qty > 0) {

        $_SESSION['cart'][(int) $product] = (int) $qty;
    }
}

$_SESSION['success'] = 'Der Warenkorb wurde aktualisiert.';

session_commit();
header('Location: cart.php');
