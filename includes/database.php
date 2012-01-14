<?php

$dsn = 'mysql:dbname=webshop;host=localhost';
$user = 'root';
$password = '';

try {
    $database = new PDO($dsn, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo 'Please check file includes/database.php, because database connection failed: ' . $e->getMessage();
}
