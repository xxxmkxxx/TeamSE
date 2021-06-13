<?php
include('DataBaseModul.php');

$query = 'SELECT * FROM COUNT(party_members) AS `count` WHERE party_id = :party_id';
$prepare = ["party_id" => $_POST['partyId']];

$party_members = executePreparedQuery($query, $prepare);

echo json_encode($party_members);