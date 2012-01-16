<?php $title = $category['name']; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active"><?php echo $title; ?></li>
</ul>

<div class="row">
<?php foreach ($products as $product): ?>
<div class="span5 product">
    <a href="product.php?id=<?php echo $product['id']; ?>">
        <img class="thumbnail" src="<?php echo $product['image']; ?>" width="260" alt="<?php echo $product['name']; ?>" />
        <h2><?php echo $product['name']; ?></h2>
    </a>
</div>
<?php endforeach; ?>
</div>

<?php require 'footer.php'; ?>
