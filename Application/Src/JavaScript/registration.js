$(document).ready(function(){
    $('#registration').submit(function(obj){
        obj.preventDefault();

        if(checkCorrectFields()) {
            checkAccount();
        }
    });
});
function checkCorrectFields() {
    var regexPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    var regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    correct = true;
    var login = document.getElementById('reg_form_login');
    var password = document.getElementById('reg_form_password');
    var mail = document.getElementById('reg_form_mail');

    if(login.value === '') {
        $('#main_form_reg_name').html('Вы не ввели логин!');
        correct = false;
    } else if(mail.value === '') {
        $('#main_form_reg_name').html('Вы не ввели почту!');
        correct = false;
    } else if(password.value === '') {
        $('#main_form_reg_name').html('Вы не ввели пароль!');
        correct = false;
    } else if(login.value.length < 4) {
        $('#main_form_reg_name').html('Вы ввели слишком маленький логин!');
        correct = false;
    } else if(password.value.length < 4) {
        $('#main_form_reg_name').html('Вы ввели слишком маленький пароль!');
        correct = false;
    } //else if(password.value.match(regexPassword)) {
    //     $('#main_form_reg_name').html('Вы ввели слишком простой пароль!');
    //     correct = false;
    // } else if(mail.value.match(regexMail)) {
    //     $('#main_form_reg_name').html('Вы ввели слишком простой пароль!');
    //     correct = false;
    // }
    return correct;
}
function checkAccount() {
    var regData = $("#registration").serialize();
    $.ajax({
        url: '../php/register.php',
        type: 'POST',
        dataType: 'html',
        data: regData,
        success: function(data){
            switch (data) {
                case 'loginAlreadyExists': {
                    $('#main_form_reg_name').html('Данный логин уже занят!');
                    break;
                }
                case 'mailAlreadyExists': {
                    $('#main_form_reg_name').html('На данный почтовый адрес уже зарегестрирован аккаунт!');
                    break;
                }
                case 'success': {
                    $('#main_form_reg_name').html('Регистрация выполнена успешно!');
                    window.location.href = '../html/game_catalog.html';
                    break;
                }
                case 'errorConnectToBD': {
                    $('#main_form_reg_name').html('Подключение к БД не удалось!');
                    break;
                }
                default:  $('#main_form_reg_name').html(data);
            }
        }
    });
}