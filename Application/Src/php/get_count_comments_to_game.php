<?php
include('DataBaseModul.php');

$query = 'SELECT COUNT(id_comment) AS `count` FROM `game_comments` WHERE game_id = :gameId';

$count = executePreparedQuery($query, ['gameId' => $_POST['gameId']]);

echo json_encode($count);
