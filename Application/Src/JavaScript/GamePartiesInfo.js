var nowCountPartyes = 0;

$(document).ready(mainFunction());

function mainFunction() {
    getGameByName(getNameGame()).done(function (data) {
        var gameId = $.parseJSON(data)[0]['game_id'];

        createPartyListner(gameId);
    });
}
//Функция получения массива всех пати
function getAllParties() {
    return $.ajax({
        url: '../php/get_parties.php'
    });
}
//Функция отображения всех пати
function viewAllParties(partiesArray, gameId) {
    var numberPartyOnRow = 0;
    var numberRow = 1;
    var rowParty = $('#rowParty');
    $("#com_party_place").empty();

    setTimeout(recursFunc(0), 0);
    
    function recursFunc(i) {
        if(i < partiesArray.length) {
            var user;
            var flag = gameId == partiesArray[i]['game_id'];

            if(flag) {
                $.when(getUserById(partiesArray[i]['party_creator'])).done(function (data) {
                    user = $.parseJSON(data);
                    var flag = partiesArray[i]['party_creator'] == user[0]['id_user'];

                    getCountPartyMembers(partiesArray[i]['id_party']).done(function (data) {
                        var count = $.parseJSON(data)[0]['count'];
                        if(flag) {
                            if(numberPartyOnRow % 3 != 0) {
                                createPartyBlock(numberPartyOnRow + 1, rowParty, count, partiesArray[i]['gamers_amount'], user[0], partiesArray[i]['id_party']);
                            } else {
                                numberPartyOnRow = 0;
                                rowParty = createNewRow(numberRow);
                                numberRow++;
                                createPartyBlock(numberPartyOnRow + 1, rowParty, count, partiesArray[i]['gamers_amount'], user[0], partiesArray[i]['id_party']);
                            }

                            numberPartyOnRow++;
                        }
                    });
                });
            }
        }

        recursFunc(i + 1);
    }

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

// Получение всех party_members
function getAllPartyMembers() {
    return $.ajax({
        url: '../php/get_party_members.php'
    });
}
// Функция для получения количества игроков в пати
function getCountPartyMembers(partyId) {
    return $.ajax({
        url: '../php/get_count_party_members.php',
        type: "POST",
        data: {
            partyId: partyId
        }
    });
}
// Функция для получения количества существующих пати по id игры
function getCountPartyes(gameId) {
    return $.ajax({
        url: '../php/get_count_partyes_to_game.php',
        type: "POST",
        data: {
            gameId: gameId
        }
    });
}
//Слушатель добавления пати в бд
function createPartyListner(gameId) {
    setInterval(() => {
        getCountPartyes(gameId).done(function (data) {
            var count = $.parseJSON(data);

            if(count[0]['count'] != nowCountPartyes) {
                getAllParties().done(function (data) {
                    var partiesArray = $.parseJSON(data);

                    viewAllParties(partiesArray, gameId);
                });

                nowCountPartyes = count[0]['count'];
            }
        });
    }, 1200);
}

// Функция для получения минимального количиства игроков среди пати для игры с gameID
function getMinPartyGamersAmount(gameId) {
    return $.ajax({
        url: '../php/get_min_party_gamers_amount.php',
        type: "POST",
        data: {
            gameId: gameId
        }
    });
}