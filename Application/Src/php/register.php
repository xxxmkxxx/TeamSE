<?php
$config = include('config.php');

$databaseConnectInfo = 'mysql:dbname='.$config['name_db'].';'.'host='.$config['host'];
$databaseUser = $config['login_db'];
$databasePassword = $config['password_db'];

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `users` WHERE `login` = :user_login';
    $execute = ['user_login'=>$_POST['reg_form_login']];
    $user = execudeQuery($databaseConnect, $query, $execute);

    $query = 'SELECT * FROM `users` WHERE `email` = :user_mail';
    $execute = ['user_mail'=>$_POST['reg_form_mail']];
    $mail = execudeQuery($databaseConnect, $query, $execute);

    if(count($user) != 0) {
        echo 'loginAlreadyExists';
    } else if (count($mail) != 0) {
        echo 'mailAlreadyExists';
    } else {
        if($_POST['reg_form_password'] == $_POST['reg_form_password2']) {
            $userPassword = password_hash($_POST['reg_form_password'], PASSWORD_DEFAULT);
            $query = 'INSERT INTO users (login, password, email, id_users_roles, user_icon, user_description) VALUES(:user_login, :user_password, :user_email, :user_roles, :user_icon, :user_description)';
            $execute = ['user_login'=>$_POST['reg_form_login'], 'user_password'=>$userPassword, 'user_email'=>$_POST['reg_form_mail'], 'user_roles'=> '2', 'user_icon'=>'../images/example_pic.png', 'user_description'=>'default'];
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