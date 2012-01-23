<?php require 'header.php'; ?>

<div class="row">
    <div class="span5 categories">

        <!-- Categories -->
        <?php foreach ($categories as $category): ?>
        <h3>
            <a href="category.php?id=<?php display($category['id']); ?>">
                <img src="<?php display($category['image']); ?>" width="64" height="64" />
                <span><?php display($category['name']); ?></span>
            </a>
        </h3>
        <?php endforeach; ?>
    </div>
    <div class="span10 home">

        <!-- Random product -->
        <a href="product.php?id=12">
            <img class="thumbnail" src="media/images/equipment/skies.jpg" width="520" alt="Skies" />
            <h2>Skies <small>ab CHF 60.00</small></h2>
        </a>
    </div>
</div>

<?php require 'footer.php'; ?>
