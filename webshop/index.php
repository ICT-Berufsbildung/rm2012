<?php

require_once 'includes/session.php';
require_once 'includes/database.php';
require_once 'includes/webshop.php';

$model = new Categories($database);
$categories = $model->all();

require 'views/home.php';