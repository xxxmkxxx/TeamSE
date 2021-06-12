<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `game` WHERE `game_name` = :gameName';
$execute = ['gameName'=>$_POST['gameName']];

$game = executePreparedQuery($query, $execute);

echo json_encode($game);
