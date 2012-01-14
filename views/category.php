<?php $title = $category['name']; ?>
<?php require 'header.php'; ?>

<div class="container">

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active"><?php echo $title; ?></li>
</ul>

<div class="row">
<?php foreach ($products as $product): ?>
<div class="span5">
    <a href="product.php?id=<?php echo $product['id']; ?>">
        <img class="thumbnail" src="<?php echo $product['image']; ?>" width="260" alt="<?php echo $product['name']; ?>" />
        <h2><?php echo $product['name']; ?></h2>
    </a>
</div>
<?php endforeach; ?>
</div>

<footer>
    <p>&copy; 2012 Jungfraubahnen Management AG</p>
</footer>

</div>

<?php require 'footer.php'; ?>
