<?php
$config = include('config.php');

$databaseConnectInfo = 'mysql:dbname='.$config['name_db'].';'.'host='.$config['host'];
$databaseUser = $config['login_db'];
$databasePassword = $config['password_db'];

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `Party`';

    $partyes = $databaseConnect->query($query)->fetchAll();

    echo json_encode($partyes);
} catch (PDOException $e) {
    echo 'errorConnectToBD';
}