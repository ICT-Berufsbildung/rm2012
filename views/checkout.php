<?php $title = 'Kasse'; ?>
<?php require 'header.php'; ?>

<ul class="breadcrumb">
    <li><a href="./">Home</a> <span class="divider">/</span></li>
    <li class="active">Warenkorb</li>
</ul>

<form action="create.php" method="POST" class="form-checkout">
    <div class="row">
        <div class="span4">
            <h2>Zusammenfassung</h2>
            <?php foreach ($summary as $product): ?>
                <p><?php echo $product['qty']; ?>x <?php echo $product['name']; ?></p>
            <?php endforeach; ?>
            <h3>Total: CHF <?php echo $total; ?></h3>
            <p></p>
        </div>
        <div class="span12">
            <fieldset>
                <legend>Rechnungsadresse</legend>
                <div class="clearfix">
                    <label for="name">Name</label>
                    <div class="input">
                        <input class="xlarge" id="name" name="name" size="255" type="text">
                    </div>
                </div>
                <div class="clearfix">
                    <label for="address">Adresse</label>
                    <div class="input">
                        <textarea class="xlarge" name="textarea" id="address" rows="3"></textarea>
                    </div>
                </div>
                <div class="clearfix">
                    <label for="phone">Telefon</label>
                    <div class="input">
                        <input id="phone" name="phone" size="255" type="text">
                        <span class="help-block">z.B. 044 123 45 67</span>
                    </div>
                </div>
                <div class="clearfix">
                    <label for="email">E-Mail</label>
                    <div class="input">
                        <input class="xlarge" id="email" name="email" size="255" type="text">
                    </div>
                </div>
            </fieldset>
            <p class="actions">
                <input type="submit" class="btn primary" value="Bestellen" />
                &nbsp;
                <a href="cart.php" class="">Abbrechen</a>
            </p>
        </div>
    </div>
</form>

<?php require 'footer.php'; ?>
