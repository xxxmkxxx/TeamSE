<?php
$config = include('config.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `party` WHERE `id_party` = :id_party';
$execute = ['id_party'=>$_POST['idParty']];

$party = executePreparedQuery($query, $execute);

echo json_encode($party);