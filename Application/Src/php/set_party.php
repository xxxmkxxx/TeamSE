<?php
include('DataBaseModul.php');
include('SessionModul.php');

$query = 'INSERT INTO party (game_id, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
            VALUES (:game_id, :party_password, :gamers_amount, :party_description, :privacy, :party_icon, :party_creator);';
$prepare = ["game_id" => $_POST['gameId'], "party_password" => $_POST['partyPassword'],
    "gamers_amount" => $_POST['gamersAmount'], "party_description" => $_POST['partyDescription'],
    "privacy" => $_POST['privacy'], "party_icon" => $_POST['partyIcon'], "party_creator" => $_POST['partyCreator']];

executePreparedQuery($query, $prepare);