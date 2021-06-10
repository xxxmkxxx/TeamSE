<?php
include('DataBaseModul.php');

$query = 'SELECT * FROM `genres`';
$genres = executeQuery($query);

return $genres;