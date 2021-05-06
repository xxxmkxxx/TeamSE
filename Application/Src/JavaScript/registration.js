$(document).ready(function(){
    $('#registration').submit(function(obj){
        obj.preventDefault();

        if(checkCorrectFields()) {
            checkAccount();
        }
    });
});
function checkCorrectFields() {
    correct = true;
    var login = document.getElementById('reg_form_login');
    var password = document.getElementById('reg_form_password');
    var mail = document.getElementById('reg_form_mail');

    if(mail.value === '') {
        $('#main_form_reg_name').html('Вы не ввели почту!');
        correct = false;
    } else if(login.value === '') {
        $('#main_form_reg_name').html('Вы не ввели логин!');
        correct = false;
    } else if(password.value === '') {
        $('#main_form_reg_name').html('Вы не ввели пароль!');
        correct = false;
    }
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