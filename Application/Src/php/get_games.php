<?php
include('DataBaseModul.php');

$query = 'SELECT * FROM game';
$games = executeQuery($query);

echo json_encode($games);