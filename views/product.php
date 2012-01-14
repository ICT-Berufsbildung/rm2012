<?php $title = $product['name']; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li><a href="category.php?id=<?php echo $category['id']; ?>"><?php echo $category['name']; ?></a> <span class="divider">/</span></li>
    <li class="active"><?php echo $title; ?></li>
</ul>

<div class="row">
    <div class="span5">
        <img class="thumbnail" src="<?php echo $product['image']; ?>" width="260" alt="<?php echo $product['name']; ?>" />
    </div>
    <div class="span10">
        <?php echo $textile->textileThis($product['description']); ?>
        <h3>CHF <?php echo $product['price']; ?></h3>
        <form action="add.php" class="form-basket" method="POST">
            <input type="hidden" name="id" value="<?php echo $product['id']; ?>" />
            <div class="actions">
                <button type="submit" class="btn primary">In den Warenkorb</button>
            </div>
        </form>
    </div>
</div>

<?php require 'footer.php'; ?>
