<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$id = isset($_POST['id']) ? (int) $_POST['id'] : 0;

if (!isset($_SESSION['cart'][$id])) {
    $_SESSION['cart'][$id] = 0;
}
$_SESSION['cart'][$id]++; // increase product qty

$_SESSION['success'] = 'Das Produkt wurde in den Warenkorb gelegt.';

session_commit();
header('Location: cart.php');
