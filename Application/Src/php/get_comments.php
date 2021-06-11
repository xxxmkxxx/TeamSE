<?php
$config = include('config.php');

$databaseConnectInfo = 'mysql:dbname='.$config['name_db'].';'.'host='.$config['host'];
$databaseUser = $config['login_db'];
$databasePassword = $config['password_db'];

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `game_comments` WHERE `game_id` = :game_id';
    $execute = ['game_id'=>$_GET['val']];
    $comments = execudeQuery($databaseConnect, $query, $execute);

    echo json_encode($comments);
} catch (PDOException $e) {
    echo 'errorConnectToBD';
}
function execudeQuery($connect, $q, $argsExecute) {
    $databaseResult = $connect->prepare($q);
    $databaseResult->execute($argsExecute);
    return $databaseResult->fetchAll();
}
