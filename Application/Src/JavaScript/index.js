$(document).ready(mainFunction());

function mainFunction() {
    //Подключаем сессию
    $.ajax({
        url: 'Application/Src/php/SessionModul.php'
    });

    $('#registration_button').on('click', function (obj) {
        obj.preventDefault();

        var mail = $('#registration_inputtype').val();

        window.location.href = 'Application/Src/html/registration.html?mail=' + mail;
    });
}