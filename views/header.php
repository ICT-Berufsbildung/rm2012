<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8" />
        <title><?php echo isset($title) ? $title : 'Jungfrau - Top Of Europe'; ?></title>
        
        <script src="media/javascripts/modernizr.custom.29803.js"></script>
        <link href="media/bootstrap/bootstrap.css" rel="stylesheet" />
        <link href="media/stylesheets/layout.css" rel="stylesheet" />
    </head>
    <body>
    
        <div class="header">
            <a href="./" class="logo" title="Home">Jungfrau - Top Of Europe</a>
            <h1><?php echo isset($title) ? $title : 'Webshop'; ?></h1>
            <p class="basket"><a href="cart.php"><?php echo array_sum($_SESSION['cart']); ?> Artikel</a></p>
        </div>

        <div class="container">

            <?php if (isset($_SESSION['success'])): ?>
            <div class="alert-message success">
                <p><?php echo htmlentities($_SESSION['success']); ?></p>
            </div>
            <?php unset($_SESSION['success']); ?>
            <?php endif; ?>

