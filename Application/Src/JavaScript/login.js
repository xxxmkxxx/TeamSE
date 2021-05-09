$(document).ready(function(){
    $('#sing_in').submit(function(obj){
        obj.preventDefault();

        if(checkCorrectFields()) {
            checkAccount();
        }
    });
});
function checkCorrectFields() {
    correct = true;
    var login = document.getElementById('sign_form_login');
    var password = document.getElementById('sign_form_password');

    // if(login.value === '') {
    //     $('#main_form_reg_name').html('Вы не ввели логин!');
    //     correct = false;
    // } else if(password.value === '') {
    //     $('#main_form_reg_name').html('Вы не ввели пароль!');
    //     correct = false;
    // }
    return correct;
}
function checkAccount() {
    var regData = $("#sing_in").serialize();
        $.ajax({
            url: '../php/login.php',
            type: 'POST',
            dataType: 'html',
            data: regData,
            success: function(data){
                switch (data) {
                    case 'doesNotExist': {
                        document.querySelector('#sign_form_login').setCustomValidity("Данного аккаунта не существует!");
                        // $('#main_form_reg_name').html('Данного аккаунта не существует!');
                        break;
                    }
                    case 'wrongPassword': {
                        document.querySelector('#sign_form_password').setCustomValidity("Вы указали неверный пароль!");
                        // $('#main_form_reg_name').html('Вы указали неверный пароль!');
                        break;
                    }
                    case 'success': {
                        // $('#main_form_reg_name').html('Вход выполнен успешно!');
                        window.location.href = '../html/game_catalog.html';
                        break;
                    }
                    case 'errorConnectToBD': {
                        alert('Подключение к БД не удалось!');
                        // $('#main_form_reg_name').html('Подключение к БД не удалось!');
                        break;
                    }
                    default:  $('#main_form_reg_name').html(data);
                }
            }
        });
}