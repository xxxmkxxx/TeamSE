<?php
$config = include('config.php');

$databaseConnectInfo = 'mysql:dbname='.$config['name_db'].';'.'host='.$config['host'];
$databaseUser = $config['login_db'];
$databasePassword = $config['password_db'];

function connectToDataBase() {
    try {
        global $databaseConnectInfo, $databaseUser, $databasePassword;
        return new PDO($databaseConnectInfo, $databaseUser, $databasePassword);
    } catch (PDOException $e) {
        echo 'errorConnectToBD';
    }
}
function executeQuery($query) {
    try {
        $databaseConnect = connectToDataBase();

        return $databaseConnect->query($query)->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo 'errorConnectToBD';
    }
}
function executePreparedQuery($query, $prepareArgs) {
    try {
        $databaseConnect = connectToDataBase();
        $databaseResult = $databaseConnect->prepare($query);
        $databaseResult->execute($prepareArgs);

        return $databaseResult->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo 'errorConnectToBD';
    }
}