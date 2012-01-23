<?php

$host = 'localhost';
$dbname = 'webshop';
$user = 'root';
$password = '';

try {
    $database = new PDO('mysql:dbname=' . $dbname . ';host=' . $host, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo '<h1>Setup instructions</h1>';
    echo '<p>Create a database <code>webshop</code>, import the file <code>webshop.sql</code> and adjust the username and password in the file <code>includes/database.php</code>';
    echo '<p>Database connection failed: <code>' . $e->getMessage() . '</code></p>';
    echo '';
    exit;
}
