<?php
$config = include('config.php');
include('SessionModul.php');

$databaseConnectInfo = 'mysql:dbname='.$config['name_db'].';'.'host='.$config['host'];
$databaseUser = $config['login_db'];
$databasePassword = $config['password_db'];

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `users` WHERE `login` = :user_login';
    $execute = ['user_login'=>$_POST['sign_form_login']];
    $user = execudeQuery($databaseConnect, $query, $execute);


    if(count($user) == 0) {
        $query = 'SELECT * FROM `users` WHERE `email` = :user_email';
        $execute = ['user_email'=>$_POST['sign_form_login']];
        $user = execudeQuery($databaseConnect, $query, $execute);
        $userPassword = $user[0]['password'];

        if(count($user) == 0) {
            echo 'doesNotExist';
        } else if(!password_verify($_POST['sign_form_password'], $userPassword)) {
            echo 'wrongPassword';
        } else {
            setLogin($user[0]['login']);
            echo 'success';
        }
    } else if (!password_verify($_POST['sign_form_password'], $user[0]['password'])) {
        echo 'wrongPassword';
    } else {
        setLogin($user[0]['login']);
        echo 'success';
    }
} catch (PDOException $e) {
    echo 'errorConnectToBD';
}
function execudeQuery($connect, $q, $argsExecute) {
    $databaseResult = $connect->prepare($q);
    $databaseResult->execute($argsExecute);
    return $databaseResult->fetchAll();
}
