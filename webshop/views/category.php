<?php $title = $category['name']; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active"><?php display($title); ?></li>
</ul>

<div class="row">
<?php foreach ($products as $product): ?>
<div class="span5 product">
    <a href="product.php?id=<?php display($product['id']); ?>">
        <img class="thumbnail" src="<?php display($product['image']); ?>" width="260" alt="<?php display($product['name']); ?>" />
        <h2><?php display($product['name']); ?></h2>
    </a>
</div>
<?php endforeach; ?>
</div>

<?php require 'footer.php'; ?>
