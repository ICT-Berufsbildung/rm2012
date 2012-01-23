<?php $title = 'Thank you!'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Checkout</li>
</ul>

<div class="alert-message success">
    <p><strong>Order #<?php display($_SESSION['order']); ?> created.</strong> Your order has been successfully created and will be processed shortly. Thank you for your business!</p>
</div>

<p><a href="./">Back to Home page »</a></p>

<?php require 'footer.php'; ?>
