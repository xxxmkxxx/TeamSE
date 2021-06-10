<?php
include('DataBaseModul.php');

$query = 'SELECT * FROM `genres`';
$genres = executeQuery($query);

echo json_encode($genres);