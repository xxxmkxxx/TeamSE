<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `party`';
$partyes = executeQuery($query);

echo json_encode($partyes);
