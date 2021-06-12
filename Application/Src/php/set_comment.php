<?php
include('DataBaseModul.php');
include('SessionModul.php');

$query = 'INSERT INTO game_comments (game_id, id_user, comment_text, date_time) VALUES (:game_id, :id_user, :comment_text, NOW());';
$prepare = ["game_id" => $_POST['gameId'], "id_user" => $_POST['userId'], "comment_text" => $_POST['commentText']];

executePreparedQuery($query, $prepare);