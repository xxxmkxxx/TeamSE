<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `users` WHERE `id_user` = :userId';
$execute = ['userId'=>$_POST['userId']];

$game = executePreparedQuery($query, $execute);

echo json_encode($game);
