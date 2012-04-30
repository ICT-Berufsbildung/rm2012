<?php $title = 'Wish List'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Wish List</li>
</ul>

<?php if (count($products) > 0): ?>
    <table class="table-wishlist bordered-table zebra-striped">
        <colgroup>
            <col width="30%" />
            <col width="40%" />
            <col width="20%" />
            <col width="10%" />
        </colgroup>
        <thead>
            <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($products as $product): ?>
            <tr>
                <td>
                    <a href="product.php?id=<?php display($product['id']); ?>">
                        <img class="thumbnail" src="<?php display($product['image']); ?>" width="260" alt="<?php display($product['name']); ?>" />
                    </a>
                </td>
                <td>
                    <a href="product.php?id=<?php display($product['id']); ?>">
                        <?php display($product['name']); ?>
                    </a>
                </td>
                <td>CHF <?php display($product['price']); ?></td>
                <td>
                    <a href="wishlist-remove.php?id=<?php display($product['id']); ?>" class="remove"><img src="media/images/delete.png" width="16" height="16" alt="Remove" /></a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
<?php else: ?>
    <div class="alert-message block-message warning">
        <p>
            <strong>Empty wish list with no products.</strong> There are no products in your wish list at the moment.
            Please add some products to your wish list by visiting their detail page and clicking the button labeled «Add to wish list».
        </p>
    </div>
<?php endif; ?>

<?php require 'footer.php'; ?>
