<?php $title = $product['name']; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li><a href="category.php?id=<?php display($category['id']); ?>"><?php display($category['name']); ?></a> <span class="divider">/</span></li>
    <li class="active"><?php display($title); ?></li>
</ul>

<div class="row">
    <div class="span5">
        <img class="thumbnail" src="<?php display($product['image']); ?>" width="260" alt="<?php display($product['name']); ?>" />
    </div>
    <div class="span10">
        <?php echo $textile->textileThis(htmlentities($product['description'], ENT_QUOTES, 'UTF-8')); ?>
        <h3>CHF <?php display($product['price']); ?></h3>
        <form action="add.php" class="form-basket" method="POST">
            <input type="hidden" name="id" value="<?php display($product['id']); ?>" />
            <div class="actions">
                <button type="submit" class="btn primary">Add to cart</button>
            </div>
        </form>
    </div>
</div>

<?php require 'footer.php'; ?>
