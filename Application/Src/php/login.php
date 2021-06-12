<?php
$config = include('config.php');
include('SessionModul.php');
include('DataBaseModul.php');

$query = 'SELECT * FROM `users` WHERE `login` = :user_login';
$execute = ['user_login'=>$_POST['sign_form_login']];

$user = executePreparedQuery($query, $execute);


if(count($user) == 0) {
    $query = 'SELECT * FROM `users` WHERE `email` = :user_email';
    $execute = ['user_email'=>$_POST['sign_form_login']];

    $user = executePreparedQuery($query, $execute);

    $userPassword = $user[0]['password'];

    if(count($user) == 0) {
        echo 'doesNotExist';
    } else if(!password_verify($_POST['sign_form_password'], $userPassword)) {
        echo 'wrongPassword';
    } else {
        setLogin($user[0]['login']);
        setLoginId($user[0]['id_user']);
        echo 'success';
    }
} else if (!password_verify($_POST['sign_form_password'], $user[0]['password'])) {
    echo 'wrongPassword';
} else {
    setLogin($user[0]['login']);
    setLoginId($user[0]['id_user']);
    echo 'success';
}