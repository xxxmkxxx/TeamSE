<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `users`';
$users = executeQuery($query);

echo json_encode($users);