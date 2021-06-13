<?php
include('DataBaseModul.php');

$query = 'SELECT COUNT(id_party) AS `count` FROM party WHERE game_id = :game_id';

$count = executePreparedQuery($query, ['game_id' => $_POST['gameId']]);

echo json_encode($count);
