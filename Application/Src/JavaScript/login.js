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
                        $('#main_form_reg_name').text("Данного аккаунта не существует!");
                        break;
                    }
                    case 'wrongPassword': {
                        $('#main_form_reg_name').text("Вы указали неверный пароль!");
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