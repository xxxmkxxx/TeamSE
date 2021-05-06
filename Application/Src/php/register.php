<?php
$databaseConnectInfo = 'mysql:dbname=polargame;host=localhost';
$databaseUser = 'root';
$databasePassword = 'root';

try {
    $databaseConnect = new PDO($databaseConnectInfo, $databaseUser, $databasePassword);

    $query = 'SELECT * FROM `users` WHERE `login` = :user_login';

    $databaseResult = $databaseConnect->prepare($query);
    $databaseResult->execute(['user_login'=>$_POST['reg_form_login']]);

    $user = $databaseResult->fetchAll();

    $query = 'SELECT * FROM `users` WHERE `mail` = :user_mail';

    $databaseResult = $databaseConnect->prepare($query);
    $databaseResult->execute(['user_mail'=>$_POST['reg_form_mail']]);

    $mail = $databaseResult->fetchAll();

    if(count($user) != 0) {
        echo 'loginAlreadyExists';
    } else if (count($mail) != 0) {
        echo 'mailAlreadyExists';
    } else {
        $query = 'INSERT INTO users (mail, login, password, type) VALUES(:user_mail, :user_login, :user_password, :user_type)';
        $databaseResult = $databaseConnect->prepare($query);
        $databaseResult->execute(['user_mail'=>$_POST['reg_form_mail'], 'user_login'=>$_POST['reg_form_login'], 'user_password'=>$_POST['reg_form_password'], 'user_type'=> '1']);
        echo 'success';
    }

} catch (PDOException $e) {
    echo 'errorConnectToBD';
}
