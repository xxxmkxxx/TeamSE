<?php
include('DataBaseModul.php');

$query = 'SELECT COUNT(party_id) AS `count` FROM party_members WHERE party_id = :party_id;';
$prepare = ["party_id" => $_POST['partyId']];

$count_members = executePreparedQuery($query, $prepare);

echo json_encode($count_members);