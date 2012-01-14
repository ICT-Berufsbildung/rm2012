<?php $title = $product['name']; ?>
<?php require 'header.php'; ?>

<div class="container">

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li><a href="category.php?id=<?php echo $category['id']; ?>"><?php echo $category['name']; ?></a> <span class="divider">/</span></li>
    <li class="active"><?php echo $title; ?></li>
</ul>

<div class="row">
    <div class="span5">
        <img class="thumbnail" src="<?php echo $product['image']; ?>" width="260" />
    </div>
    <div class="span10">
        <?php echo $textile->textileThis($product['description']); ?>
        <h3>CHF <?php echo $product['price']; ?></h3>
        <form action="" class="form-basket">
            <div class="actions">
                <button type="submit" class="btn primary">In den Warenkorb</button>
            </div>
        </form>
    </div>
</div>

<footer>
    <p>&copy; 2012 Jungfraubahnen Management AG</p>
</footer>

</div>

<?php require 'footer.php'; ?>
