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
                    $("#error_icon").attr('src', '../images/error.png');
                    $('#Error_message').text("Данный логин уже занят!");
                    break;
                }
                case 'mailAlreadyExists': {
                    $("#error_icon").attr('src', '../images/error.png');
                    $('#Error_message').text("На данный почтовый адрес уже зарегестрирован аккаунт!");
                    break;
                }
                case 'passwordDontMatch': {
                    $("#error_icon").attr('src', '../images/error.png');
                    $('#Error_message').text("Пароли не совпадают!");
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