var files_path;

$(document).ready(mainFunction());

function mainFunction() {
    checkCheckBox();
    // вызов функции предварительного просмотра загружаемого изображения
    $("#file").change(function() {
        readURL(this);
        uploadImage(this.files).done(function (respond) {
            files_path = respond.files;
        });
    });

    getGameByName(getNameGame()).done(function (data) {
        var game = $.parseJSON(data)[0];
        getSession().done(function (data) {
            var session = $.parseJSON(data);

            createParty(game['game_id'], session['id']);
        });
    });
}
//функция предварительного просмотра загружаемого изображения
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
//разворачивание и сворачивание формы с паролем в форме создания пати
const privacy = document.getElementById('privacy')

privacy.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        $(".password_form").css("display","block");
        $(".create_party_form").animate({"height": "38vw"}, 0);

    } else {
        $(".password_form").css("display","none");
        $(".create_party_form").animate({"height": "36vw"}, 0);
    }
})
//Функция создания пати
function createParty(gameId, userId) {
    $('#create_party_form').submit(function (obj) {
        obj.preventDefault();

        var privacyCheckBox = document.getElementById('privacy');
        var partyDescrTextArea = document.getElementById('party_descr');
        var playerNumInput = document.getElementById('player_num');

        var isPrivacyFlag = privacyCheckBox.value == 'yes';

        if(isPrivacyFlag) {
            var passwordForm = document.getElementById('passwordForm').value;

            if(passwordForm.length != '' && passwordForm.length > 4 && partyDescrTextArea.value != '') {
                $.ajax({
                    url: '../php/set_party.php',
                    type: 'POST',
                    data: {
                        gameId: gameId, partyPassword: passwordForm, gamersAmount: playerNumInput.value,
                        partyDescription: partyDescrTextArea.value, privacy: 'закрытая',
                        partyIcon: '', partyCreator: userId
                    },
                    success: function () {
                        close_party_creator();
                    }
                });
            }
        } else {
            if(partyDescrTextArea.value != '') {
                $.ajax({
                    url: '../php/set_party.php',
                    type: 'POST',
                    data: {
                        gameId: gameId, partyPassword: '', gamersAmount: playerNumInput.value,
                        partyDescription: partyDescrTextArea.value, privacy: 'открытая',
                        partyIcon: '', partyCreator: userId
                    },
                    success: function () {
                        close_party_creator();
                    }
                });
            }
        }
    });
}
//Функция загрузки изображения на сервер
function uploadImage(files) {
    if(typeof files == 'undefined')
        return;

    var data = new FormData();

    $.each(files, function(key, value) {
        data.append(key, value);
    });

    data.append('my_file_upload', 1);

    return $.ajax({
        url: './submit.php',
        type: 'POST', // важно!
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false
    });
}
//Слушатель нажатия на чекбокс в форме создания пати
function checkCheckBox() {
    $('#privacy').click(function (obj) {
        obj.preventDefault();

        $('#privacy').val('yes');
    });
}