<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `game_comments` WHERE `game_id` = :gameId';
$execute = ['gameId'=>$_POST['gameId']];

$comments = executePreparedQuery($query, $execute);

echo json_encode($comments);