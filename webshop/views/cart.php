<?php $title = 'Cart'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Cart</li>
</ul>

<?php if ($total > 0): ?>
    <form action="update.php" method="POST" class="form-cart">
        <table class="bordered-table zebra-striped">
            <colgroup>
                <col width="40%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
            </colgroup>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($summary as $product): ?>
                <tr>
                    <td>
                        <a href="product.php?id=<?php display($product['id']); ?>">
                            <?php display($product['name']); ?>
                        </a>
                    </td>
                    <td>CHF <?php display($product['price']); ?></td>
                    <td>
                        <?php $name = 'cart[' . htmlentities($product['id'], ENT_QUOTES, 'UTF-8') . ']'; ?>
                        <input name="<?php display($name); ?>" value="<?php display($product['qty']); ?>" class="small" />
                    </td>
                    <td>CHF <?php display($product['row_total']); ?></td>
                </tr>
                <?php endforeach; ?>
                <tr>
                    <td colspan="3">
                        <button class="btn">Update Cart</button>
                    </td>
                    <td><strong>CHF <?php display($total); ?></strong></td>
                </tr>
            </tbody>
        </table>

        <p class="actions">
            <a href="checkout.php" class="btn primary">Checkout</a>
        </p>
    </form>
<?php else: ?>
    <div class="alert-message block-message warning">
        <p>
            <strong>Empty cart with no products.</strong> There are no products in your cart at the moment.
            Please add some products to your card by visiting their detail page and clicking the button labeled «Add to cart».
        </p>
    </div>
<?php endif; ?>

<?php require 'footer.php'; ?>
