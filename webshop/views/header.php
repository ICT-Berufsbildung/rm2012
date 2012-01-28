<?php

/**
 * Helper function to display escaped output.
 *
 * @var string $value The value to display
 * @var string $default Value to display if $value does not exist
 */
function display(&$value, $default = '') {
    if (!isset($value)) {
        $value = $default;
    }
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    echo htmlentities($value, ENT_QUOTES, 'UTF-8');
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title><?php display($title, 'Jungfrau - Top Of Europe'); ?></title>

        <script src="media/javascripts/modernizr.custom.29803.js"></script>
        <script src="media/javascripts/jquery-1.7.1.min.js"></script>
        <link href="media/bootstrap/bootstrap.css" rel="stylesheet" />
        <link href="media/stylesheets/layout.css" rel="stylesheet" />
        <link rel="shortcut icon" href="favicon.ico">
    </head>
    <body>

        <div class="header">
            <a href="./" class="logo" title="Home">Jungfrau - Top Of Europe</a>
            <h1><?php display($title, 'Webshop'); ?></h1>
            <p class="basket"><a href="cart.php"><?php echo array_sum($_SESSION['cart']); ?> Items</a></p>
        </div>

        <div class="container">

            <!-- Displays all success messages from session -->
            <?php if (isset($_SESSION['success'])): ?>
                <div class="alert-message success">
                    <p><?php display($_SESSION['success']); ?></p>
                </div>
                <?php unset($_SESSION['success']); ?>
            <?php endif; ?>

            <!-- Displays all error messages from session -->
            <?php if (isset($_SESSION['error'])): ?>
                <div class="alert-message error">
                    <p><?php display($_SESSION['error']); ?></p>
                </div>
                <?php unset($_SESSION['error']); ?>
            <?php endif; ?>

