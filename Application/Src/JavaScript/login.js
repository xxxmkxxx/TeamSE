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
                        $('#sign_form_login')[0].setCustomValidity("Данного аккаунта не существует!");
                        break;
                    }
                    case 'wrongPassword': {
                        $('#sign_form_password')[0].setCustomValidity("Вы указали неверный пароль!");
                        break;
                    }
                    case 'success': {
                        window.location.href = '../html/game_catalog.html';
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