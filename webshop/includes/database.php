<?php

$host = 'localhost';
$dbname = 'webshop';
$user = 'webshop';
$password = 'Pear73';

// create database connection
try {
    $database = new PDO('mysql:dbname=' . $dbname . ';host=' . $host, $user, $password);
    $database->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo '<h1>Setup instructions</h1>';
    echo '<p>Create a database <strong>webshop</strong>, import the file <strong>webshop.sql</strong>';
    echo ' and adjust the username and password in the file <strong>includes/database.php</strong></p>';
    echo '<p>Database connection failed: <code>' . $e->getMessage() . '</code></p>';
    echo '';
    exit;
}

// check database setup
if (!$database->query('SELECT * FROM `product`')) {
    echo '<h1>Setup instructions</h1>';
    echo '<p>Import the file <strong>webshop.sql</strong> into the database <strong>webshop</strong>.</p>';
    echo '<p>Database table <code>product</code> not found.</p>';
    echo '';
    exit;
}

// check competitor information
if (!isset($competitor['prename']) || trim($competitor['prename']) == '' ||
    !isset($competitor['surname']) || trim($competitor['surname']) == '' ||
    !isset($competitor['birthdate']) || $competitor['birthdate'] == '' ||
    !isset($competitor['email']) || $competitor['email'] == '' ||
    !isset($competitor['employer']) || $competitor['employer'] == '' ||
    !isset($competitor['school']) || $competitor['school'] == '') {
    echo '<h1>Project instructions</h1>';
    echo '<p>Please fill out the competitor information in <strong>includes/competitor.php</strong> first!';
    exit;
}
