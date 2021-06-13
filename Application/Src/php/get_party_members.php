<?php
include('DataBaseModul.php');

$query = 'SELECT * FROM party_members';
$party_members = executeQuery($query);

echo json_encode($party_members);