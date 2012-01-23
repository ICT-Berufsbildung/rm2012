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
                    <td><a href="product.php?id=<?php display($product['id']); ?>"><?php display($product['name']); ?></td>
                    <td>CHF <?php display($product['price']); ?></td>
                    <td>
                        <?php $name = 'cart[' . htmlentities($product['id'], ENT_QUOTES, 'UTF-8') . ']'; ?>
                        <input name="<?php display($name); ?>" value="<?php display($product['qty']); ?>" class="span2" />
                        <button type="submit" name="<?php display($name); ?>" class="remove" value="0">
                            <img src="media/images/delete.png" alt="Löschen" />
                        </button>
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
        <p><strong>Leerer Warenkorb.</strong> Momentan befinden sich noch keine Artikel im Warenkorb. Fügen Sie ein Produkt in den Warenkorb hinzu, indem Sie auf dessen Detailansicht auf «In den Warenkorb» klicken.</p>
    </div>
<?php endif; ?>

<?php require 'footer.php'; ?>