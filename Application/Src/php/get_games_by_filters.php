<?php
include('DataBaseModul.php');

$query = 'SELECT game_id, game_name, game_description, game_icon_link, popularity, genres.genre FROM game
        INNER JOIN games_genres ON games_genres.game_id = game.game_id
        INNER JOIN genres ON genres.id_genre = games_genres.genre_id';
$games = executeQuery($query);

echo json_encode($games);
