<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM party_members
            INNER JOIN users ON  party_members.members_party_id = users.id_user
            WHERE `party_id` = :party_id';
$execute = ['party_id'=>$_POST['partyId']];

$members = executePreparedQuery($query, $execute);

echo json_encode($members);
