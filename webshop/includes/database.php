<?php

$host = 'localhost';
$dbname = 'webshop';
$user = 'webshop';
$password = 'Pear73';

try {
    $database = new PDO('mysql:dbname=' . $dbname . ';host=' . $host, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo '<h1>Setup instructions</h1>';
    echo '<p>Create a database <strong>webshop</strong>, import the file <strong>webshop.sql</strong>';
    echo ' and adjust the username and password in the file <strong>includes/database.php</strong>';
    echo '<p>Database connection failed: <code>' . $e->getMessage() . '</code></p>';
    echo '';
    exit;
}
