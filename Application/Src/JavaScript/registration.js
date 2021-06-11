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
    var login = $('#reg_form_login');
    var password = $('#reg_form_password');
    var password2 = $('#reg_form_password2');
    var mail = $('#reg_form_mail');

if(login.val().length < 4) {
        login[0].setCustomValidity("Логин должен содержать не менее 4 символов");
        correct = false;
    } else if(password.val().length < 4) {
        password[0].setCustomValidity("Вы ввели слишком простой пароль");
        correct = false;
    } else if(password2.val() != password.val()){
        password2[0].setCustomValidity("Пароли не совпадают");
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
                    $('#reg_form_login')[0].setCustomValidity("Данный логин уже занят!");
                    break; 
                }
                case 'mailAlreadyExists': {
                   $('#reg_form_mail')[0].setCustomValidity("На данный почтовый адрес уже зарегестрирован аккаунт!");
                    break;
                }
                case 'passwordDontMatch': {
                   $('#reg_form_password2')[0].setCustomValidity("Пароли не совпадают!");
                    break;
                }
                case 'success': {
                    window.location.href = '../html/game_catalog.html?logining=1';
                    break;
                }
                case 'errorConnectToBD': {
                    alert('Подключение к БД не удалось!')
                    break;
                }
                default:  alert(data);
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