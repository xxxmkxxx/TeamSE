$(document).ready(mainFunction());

function mainFunction() {
    getAllParty().done(function (data) {
        partyes = $.parseJSON(data);

        viewAllPartyes(partyes);
    });
}
//Функция получения массива всех пати
function getAllParty() {
    return $.ajax({
        url: '../php/get_partys.php'
    });
}
//Функция отображения всех пати
function viewAllPartyes(partyes) {
    var numberPartyOnRow = 0;
    var numberRow = 1;
    var rowParty = $('#rowParty');

    getGameByName(getNameGame()).done(function (data) {
        var game = $.parseJSON(data);

        for (let i = 0; i < partyes.length; i++) {
            var user;
            var flag = game[0]['game_id'] == partyes[i]['game_id'];

            if(flag) {
                getUserById(partyes[i]['party_creator']).done(function (data) {
                    user = $.parseJSON(data);
                    var flag = partyes[i]['party_creator'] == user[0]['id_user'];


                    if(flag) {
                        if(numberPartyOnRow % 3 != 0) {
                            numberPartyOnRow++;

                            createPartyBlock(numberPartyOnRow + 1, rowParty, partyes[i]['gamers_amount'], 5, user[0], partyes[i]['id_party']);
                        } else {
                            numberPartyOnRow = 0;
                            rowParty = createNewRow(numberRow);
                            createPartyBlock(numberPartyOnRow + 1, rowParty, partyes[i]['gamers_amount'], 5, user[0], partyes[i]['id_party']);
                        }
                    }
                });
            }
        }
    });
}
//Функция создания блока, где распологаются строки с пати
function createPartyBlock(numberPartyOnRow, rowParty, countPlayers, allCountPlayers, creater, idParty) {
    var partySpan = $('<span>', {
        'class': 'form' + numberPartyOnRow
    });

    var div_row2 = $('<div>', {
        'class': 'row2'
    });

    var span_participans = $('<span>', {
        'class': 'participans'
    }).text(countPlayers + ' из ' + allCountPlayers + ' игроков');

    var span_come_in = $('<span>', {
        'id': idParty,
        'class': 'come_in'
    });

    var img_come_in = $('<img>', {
        'src': '../images/come_in_icon.png'
    });

    var div_formsdata = $('<div>', {
        'class': 'formsdata'
    });

    var span_form_img = $('<span>', {
        'class': 'form_img'
    });

    var img_form_img = $('<img>', {
        'src': creater['user_icon']
    });

    var span_party_creator = $('<span>', {
        'class': 'party_creator'
    }).text(creater['login']);

    span_come_in.append(img_come_in);
    div_row2.append(span_participans);
    div_row2.append(span_come_in);
    span_form_img.append(img_form_img);
    div_formsdata.append(span_form_img);
    div_formsdata.append(span_party_creator);
    partySpan.append(div_formsdata);
    partySpan.append(div_row2);

    rowParty.append(partySpan);
}
//Функция создания строки пати
function createNewRow(id) {
    var rowDiv = $('<div>', {
        'class': 'row1',
        'id': 'rowParty' + id
    });

    $('#com_party_place').append(rowDiv);

    return $('#rowParty' + id);
}