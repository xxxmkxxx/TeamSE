<?php

if (empty($_POST['sign_form_login'])) {
    echo 'Укажите логин';
} elseif (empty($_POST['sign_form_password'])) {
    echo 'Укажите пароль';
} else {
    echo 'Авторизация...';
}