<?php

$databaseConnectInfo = 'mysql:dbname=polargame;host=localhost';
$databaseUser = 'root';
$databasePassword = 'root';

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `users` WHERE `login` = :user_login';

    $databaseResult = $databaseConnect->prepare($query);
    $databaseResult->execute(['user_login'=>$_POST['sign_form_login']]);

    $user = $databaseResult->fetchAll();


    if(count($user) == 0) {
        echo 'doesNotExist';
    } else if ($user[0]['password'] != $_POST['sign_form_password']) {
        echo 'wrongPassword';
    } else {
        echo 'success';
    }



} catch (PDOException $e) {
    echo 'errorConnectToBD';
}