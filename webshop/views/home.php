<?php require 'header.php'; ?>

<div class="row">
    <div class="span5 categories">
        <?php foreach ($categories as $category): ?>
        <h3>
            <a href="category.php?id=<?php echo $category['id']; ?>">
                <img src="<?php echo $category['image']; ?>" width="64" height="64" />
                <span><?php echo $category['name']; ?></span>
            </a>
        </h3>
        <?php endforeach; ?>
    </div>
    <div class="span10 home">
        <a href="product.php?id=2">
            <img class="thumbnail" src="media/images/banner.jpg" width="520"alt="Hard-Kulm" />
            <h2>Hard-Kulm <small>ab CHF 32.00</small></h2>
        </a>
    </div>
</div>

<?php require 'footer.php'; ?>
