<?php
include('DataBaseModul.php');

$query = 'SELECT MIN(gamers_amount) FROM `party` WHERE `game_id` = :gameID';
$prepare = ["gameID" => $_POST['gameID']];

$min_party_gamers_amount = executePreparedQuery($query, $prepare);

echo json_encode($min_party_gamers_amount);