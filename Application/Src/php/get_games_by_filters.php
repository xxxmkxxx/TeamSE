<?php
include('DataBaseModul.php');

$query = 'SELECT id_game, GameName, GameDescription, GameIconLink, Popularity, genres.Genre FROM game
        INNER JOIN games_genres ON games_genres.game_id = game.id_game
        INNER JOIN genres ON genres.id_genre = games_genres.genre_id';
$games = executeQuery($query);

echo json_encode($games);
