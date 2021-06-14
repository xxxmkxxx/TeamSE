<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'DELETE FROM party_members WHERE `members_party_id` = :partyMembers';
$execute = ['party_members'=>$_POST['partyMembers']];

executePreparedQuery($query, $execute);