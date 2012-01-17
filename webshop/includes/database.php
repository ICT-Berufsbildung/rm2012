<?php

$host = 'localhost';
$dbname = 'webshop';
$user = 'root';
$password = '';

try {
    $database = new PDO('mysql:dbname=' . $dbname . ';host=' . $host, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo 'Create a database "webshop", import the file webshop.sql and check the file includes/database.php, database connection failed: ' . $e->getMessage();
    echo '';
    exit;
}
