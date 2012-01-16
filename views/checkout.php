<?php $title = 'Checkout'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Checkout</li>
</ul>

<form action="create.php" method="POST" class="form-checkout">
    <div class="row">
        <div class="span4">
            <h2>Summary</h2>
            <?php foreach ($summary as $product): ?>
                <p><?php echo $product['qty']; ?>x <?php echo $product['name']; ?></p>
            <?php endforeach; ?>
            <h3>Total: CHF <?php echo $total; ?></h3>
            <p></p>
        </div>
        <div class="span12">
            <fieldset>
                <legend>Billing Address</legend>
                <div class="clearfix">
                    <label for="name">Full Name</label>
                    <div class="input">
                        <input class="xlarge" id="name" name="name" size="255" type="text">
                    </div>
                </div>
                <div class="clearfix">
                    <label for="address">Address</label>
                    <div class="input">
                        <textarea class="xlarge" name="textarea" id="address" rows="3"></textarea>
                    </div>
                </div>
                <div class="clearfix">
                    <label for="phone">Phone</label>
                    <div class="input">
                        <input id="phone" name="phone" size="255" type="text">
                        <span class="help-block">e.g. 044 123 45 67</span>
                    </div>
                </div>
                <div class="clearfix">
                    <label for="email">Email</label>
                    <div class="input">
                        <input class="xlarge" id="email" name="email" size="255" type="text">
                    </div>
                </div>
            </fieldset>
            <p class="actions">
                <input type="submit" class="btn primary" value="Place Order" />
                &nbsp;
                <a href="cart.php" class="">Cancel</a>
            </p>
        </div>
    </div>
</form>

<?php require 'footer.php'; ?>
