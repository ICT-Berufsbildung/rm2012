<?php

require_once 'includes/session.php';
require_once 'includes/database.php';

$statement = $database->prepare('SELECT * FROM `categories`');
$statement->execute();
$categories = $statement->fetchAll();

require 'views/home.php';
