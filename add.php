<?php

require_once 'includes/database.php';
require_once 'includes/webshop.php';

$id = isset($_POST['id']) ? (int) $_POST['id'] : 0;

$products = new Products($database);
$product = $products->get($id);

if ($product) {

    $_SESSION['success'] = 'Das Produkt wurde in den Warenkorb gelegt.';

    header('Location: cart.php');

} else {
    header('Location: ./'); // redirect to home if product is not found
}
