<?php

/**
 * Save order.
 */

require_once 'includes/webshop.php';

try {

    $model = new Product($database);
    $cart = new Cart($_SESSION['cart'], $model);

    // save order
    $order = new Order($database, $cart, $_POST);
    $_SESSION['order'] = $order->save();

    // clear cart
    unset($_SESSION['cart']);

    // redirect to cart
    session_commit();
    header('Location: success.php');

} catch (ShopException $e) {

    // error occured
    $errors = $e->getErrors();
    $_SESSION['error'] = 'At least one error occured during placing your order. Please fix the highlighted fields below and try again.';

    // render checkout
    require 'checkout.php';
}

