<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `party`';
$parties = executeQuery($query);

echo json_encode($parties);
