<?php
$databaseConnectInfo = 'mysql:dbname=polargame;host=localhost';
$databaseUser = 'root';
$databasePassword = 'root';

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `users` WHERE `login` = :user_login';
    $execute = ['user_login'=>$_POST['reg_form_login']];
    $user = execudeQuery($databaseConnect, $query, $execute);

    $query = 'SELECT * FROM `users` WHERE `mail` = :user_mail';
    $execute = ['user_mail'=>$_POST['reg_form_mail']];
    $mail = execudeQuery($databaseConnect, $query, $execute);

    if(count($user) != 0) {
        echo 'loginAlreadyExists';
    } else if (count($mail) != 0) {
        echo 'mailAlreadyExists';
    } else {
        if($_POST['reg_form_password'] == $_POST['reg_form_password2']) {
            $userPassword = password_hash($_POST['reg_form_password'], PASSWORD_DEFAULT);
            $query = 'INSERT INTO users (mail, login, password, type) VALUES(:user_mail, :user_login, :user_password, :user_type)';
            $execute = ['user_mail'=>$_POST['reg_form_mail'], 'user_login'=>$_POST['reg_form_login'], 'user_password'=>$userPassword, 'user_type'=> '1'];
            execudeQuery($databaseConnect, $query, $execute);
            echo 'success';
        } else {
            echo 'passwordDontMatch';
        }
    }
} catch (PDOException $e) {
    echo 'errorConnectToBD';
}
function execudeQuery($connect, $q, $argsExecute) {
    $databaseResult = $connect->prepare($q);
    $databaseResult->execute($argsExecute);
    return $databaseResult->fetchAll();
}