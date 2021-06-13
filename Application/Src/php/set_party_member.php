<?php
include('DataBaseModul.php');
include('SessionModul.php');

$query = 'INSERT INTO party_members (party_id, members_party_id, party_member_role, nickname)
            VALUES (:party_id, :members_party_id, :party_member_role, :nickname;';
$prepare = ["party_id" => $_POST['partyId'], "members_party_id" => $_POST['membersPartyId'],
    "party_member_role" => $_POST['partyMemberRole'], "nickname" => $_POST['nickname']];

executePreparedQuery($query, $prepare);