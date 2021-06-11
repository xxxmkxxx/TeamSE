<?php
session_start();
chooseModificator();

function chooseModificator() {
    switch($_GET['logining']) {
        case 1: {
            echo json_encode($_SESSION);
            break;
        }
    }
}
function setLogin($login) {
    $_SESSION['login'] = $login;
}