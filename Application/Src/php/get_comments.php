<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `game_comments`
            WHERE `game_id` = :gameId
            ORDER BY `game_comments`.`id_comment` DESC';
$execute = ['gameId'=>$_POST['gameId']];

$comments = executePreparedQuery($query, $execute);

echo json_encode($comments);