<?php
$config = include('config.php');
include('DataBaseModul.php');
include('SessionModul.php');

$query = 'SELECT * FROM `users` WHERE `login` = :user_login';
$execute = ['user_login'=>$_POST['reg_form_login']];

$user = executePreparedQuery($query, $execute);

$query = 'SELECT * FROM `users` WHERE `email` = :user_mail';
$execute = ['user_mail'=>$_POST['reg_form_mail']];

$mail = executePreparedQuery($query, $execute);

if(count($user) != 0) {
    echo 'loginAlreadyExists';
} else if (count($mail) != 0) {
    echo 'mailAlreadyExists';
} else {
    if($_POST['reg_form_password'] == $_POST['reg_form_password2']) {
        $userPassword = password_hash($_POST['reg_form_password'], PASSWORD_DEFAULT);

        $query = 'INSERT INTO users (login, password, email, id_users_roles, user_icon, user_description)
                    VALUES(:user_login, :user_password, :user_email, :user_roles, :user_icon, :user_description)';
        $execute = ['user_login'=>$_POST['reg_form_login'], 'user_password'=>$userPassword, 'user_email'=>$_POST['reg_form_mail'], 'user_roles'=> '2',
                    'user_icon'=>'../images/example_pic.png', 'user_description'=>'default'];

        executePreparedQuery($query, $execute);

        $query = 'SELECT * FROM `users` WHERE `login` = :login';
        $execute = ['login'=>$_POST['reg_form_login']];

        $user = executePreparedQuery($query, $execute);

        setLogin($user[0]['login']);
        setLoginId($user[0]['id_user']);

        echo 'success';
    } else {
        echo 'passwordDontMatch';
    }
}