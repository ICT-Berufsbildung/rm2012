<?php $title = 'Checkout'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Checkout</li>
</ul>

<form action="create.php" method="POST" class="form-checkout">
    <div class="row">
        <div class="span4">
            <table class="bordered-table zebra-striped">
                <thead>
                    <tr>
                        <th>Order Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($summary as $product): ?>
                    <tr>
                        <td><?php display($product['qty']); ?>x <?php display($product['name']); ?></td>
                    </tr>
                    <?php endforeach; ?>
                    <tr>
                        <td>Total: CHF <?php display($total); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="span12">
            <fieldset>
                <legend>Billing Address</legend>
                <div class="clearfix<?php if (isset($errors['prename'])) { echo ' error'; } ?>">
                    <label for="prename">Prename</label>
                    <div class="input">
                        <input autofocus value="<?php display($_POST['prename']); ?>" class="xlarge" id="prename" name="prename" size="255" type="text">
                        <span class="help-inline"><?php display($errors['prename']); ?></span>
                    </div>
                </div>
                <div class="clearfix<?php if (isset($errors['surname'])) { echo ' error'; } ?>"">
                    <label for="surname">Surname</label>
                    <div class="input">
                        <input value="<?php display($_POST['surname']); ?>" class="xlarge" id="surname" name="surname" size="255" type="text">
                        <span class="help-inline"><?php display($errors['surname']); ?></span>
                    </div>
                </div>
                <div class="clearfix<?php if (isset($errors['address'])) { echo ' error'; } ?>"">
                    <label for="address">Street, Nr.</label>
                    <div class="input">
                        <input value="<?php display($_POST['address']); ?>" class="xlarge" id="address" name="address" size="255" type="text">
                        <span class="help-inline"><?php display($errors['address']); ?></span>
                    </div>
                </div>
                <div class="clearfix<?php if (isset($errors['zip']) || isset($errors['city'])) { echo ' error'; } ?>"">
                    <label for="zip">Zip, City</label>
                    <div class="input">
                        <input value="<?php display($_POST['zip']); ?>" class="mini" id="zip" name="zip" size="10" type="text">
                        <input value="<?php display($_POST['city']); ?>" class="medium" id="city" name="city" size="255" type="text">
                        <?php if (!isset($errors['zip'])): ?>
                            <span class="help-inline"><?php display($errors['city']); ?></span>
                        <?php endif; ?>
                        <span class="help-inline"><?php display($errors['zip']); ?></span>
                    </div>
                </div>
                <div class="clearfix<?php if (isset($errors['phone'])) { echo ' error'; } ?>"">
                    <label for="phone">Phone</label>
                    <div class="input">
                        <input value="<?php display($_POST['phone']); ?>" id="phone" name="phone" size="255" type="text">
                        <span class="help-inline"><?php display($errors['phone']); ?></span>
                        <span class="help-block">e.g. 044 123 45 67</span>
                    </div>
                </div>
                <div class="clearfix<?php if (isset($errors['email'])) { echo ' error'; } ?>"">
                    <label for="email">Email</label>
                    <div class="input">
                        <input value="<?php display($_POST['email']); ?>" class="xlarge" id="email" name="email" size="255" type="text">
                        <span class="help-inline"><?php display($errors['email']); ?></span>
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
