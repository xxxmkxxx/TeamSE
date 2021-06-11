$(document).ready(function(){
    rofl();

    $('#sing_in').submit(function(obj){
        obj.preventDefault();

        if(checkCorrectFields()) {
            checkAccount();
        }
    });
});
function checkCorrectFields() {
    correct = true;
    var login = $('#sign_form_login');
    var password = $('#sign_form_password');

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
                        $("#error_icon").attr('src', '../images/error.png');
                        $('#Error_message').text("Данного аккаунта не существует!");
                        break;
                    }
                    case 'wrongPassword': {
                        $("#error_icon").attr('src', '../images/error.png');
                        $('#Error_message').text("Вы указали неверный пароль!");
                        break;
                    }
                    case 'success': {
                        window.location.href = '../html/game_catalog.html?logining=1';
                        break;
                    }
                    case 'errorConnectToBD': {
                        alert('Подключение к БД не удалось!');
                        break;
                    }
                    default:  alert(data);
                }
            }
        });
}
function rofl() {
    $("#forgot_password").on('click', function (){
        prompt('К сожалению, вы лох(', 'da');
    });


}