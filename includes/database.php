<?php

$host = 'localhost';
$dbname = 'webshop';
$user = 'root';
$password = '';

try {
    $database = new PDO('mysql:dbname=' . $dbname . ';host=' . $host, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo 'Please check file includes/database.php, because database connection failed: ' . $e->getMessage();
}
