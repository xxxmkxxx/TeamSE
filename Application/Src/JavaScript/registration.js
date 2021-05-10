$(document).ready(function(){
    inputMail();

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
    var password2 = document.getElementById('reg_form_password2');
    var mail = document.getElementById('reg_form_mail');

if(login.value.length < 4) {
        document.querySelector('#reg_form_login').setCustomValidity("Логин должен содержать не менее 4 символов");
        correct = false;

    } else if(password.value.length < 4) {
        document.querySelector('#reg_form_password').setCustomValidity("Вы ввели слишком простой пароль");
        correct = false;
    } else if(password2.value != password.value){
        document.querySelector('#reg_form_password2').setCustomValidity("Пароли не совпадают");
    }

    //else if(password.value.match(regexPassword)) {
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
                    document.querySelector('#reg_form_login').setCustomValidity("Данный логин уже занят!");
                    // $('#main_form_reg_name').html('Данный логин уже занят!');
                    break; 
                }
                case 'mailAlreadyExists': {
                    document.querySelector('#reg_form_mail').setCustomValidity("На данный почтовый адрес уже зарегестрирован аккаунт!");
                    // $('#main_form_reg_name').html('На данный почтовый адрес уже зарегестрирован аккаунт!');
                    break;
                }
                case 'success': {
                    // $('#main_form_reg_name').html('Регистрация выполнена успешно!'); ЗАЧЕМ ЭТО ПИСАТЬ? МОЖНО ПРОСТО ПЕРЕКИНУТЬ НА ГЛАВНУЮ СТРАНИЧКУ
                    window.location.href = '../html/game_catalog.html';
                    break;
                }
                case 'errorConnectToBD': {
                    alert('Подключение к БД не удалось!')
                    // $('#main_form_reg_name').html('Подключение к БД не удалось!');
                    break;
                }
                default:  $('#main_form_reg_name').html(data);
            }
        }
    });
}
function inputMail() {
    var url_str = window.location.href;
    var url = new URL(url_str);
    var mail = url.searchParams.get('mail');

    $('#reg_form_mail').val(mail);
}