<?php $title = 'Warenkorb'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Warenkorb</li>
</ul>

<?php if (count($cart) > 0): ?>
    <form action="refresh.php" method="POST" class="form-cart">
        <table class="bordered-table zebra-striped">
            <colgroup>
                <col width="40%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
            </colgroup>
            <thead>
                <tr>
                    <th>Produkt</th>
                    <th>Preis</th>
                    <th>Anzahl</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($cart as $product): ?>
                <tr>
                    <td><a href="product.php?id=<?php echo $product['id']; ?>"><?php echo $product['name']; ?></td>
                    <td>CHF <?php echo $product['price']; ?></td>
                    <td><input name="cart[<?php echo $product['id']; ?>]" value="<?php echo $product['qty']; ?>" class="span2" /></td>
                    <td>CHF <?php echo $product['row_total']; ?></td>
                </tr>
                <?php endforeach; ?>
                <tr>
                    <td colspan="3">&nbsp;</td>
                    <td><strong>CHF <?php echo $total; ?></strong></td>
                </tr>
            </tbody>
        </table>
        
        <p class="actions">
            <button class="btn">Anzahl anpassen</button>
            <a href="checkout.php" class="btn primary">Zur Kasse</a>
        </p>
    </form>
<?php else: ?>
    <div class="alert-message block-message warning">
        <p><strong>Leerer Warenkorb.</strong> Momentan befinden sich noch keine Artikel im Warenkorb. Fügen Sie ein Produkt in den Warenkorb hinzu, indem Sie auf dessen Detailansicht auf «In den Warenkorb» klicken.</p>
    </div>
<?php endif; ?>

<?php require 'footer.php'; ?>
