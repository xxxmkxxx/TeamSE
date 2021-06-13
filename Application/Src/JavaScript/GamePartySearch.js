$(document).ready(mainFunction());


function mainFunction() {


    //Событие отправки результата строки поиска по нажатию на Enter
    $('#party_search').submit(function (obj) {
        obj.preventDefault();

        var nickname = $('#find_party').val();
        getAllParties().done(function(data){
            let partiesArray = $.parseJSON(data);
            searchParty(partiesArray, nickname);
        });
    });
    //Событие отправки результата строки поиска по нажатию на иконку поиска
    $('#find_icon').click(function (obj) {
        obj.preventDefault();

        var nickname = $('#find_party').val();

        getAllParties().done(function(data){
            let partiesArray = $.parseJSON(data);
            searchParty(partiesArray, nickname);
        });
    });
}

var showErrorMessage;
//Функция поиска пати
function searchParty(parties, nickname) {
    showErrorMessage = true;
    $('#search_message').text('');           //сообщение сверху отображенных пати

    $('#com_party_place').empty();

    var partiesRowDiv = $('<div>', {
        'class': 'row1',
        'id': 'rowParty'
    });
    $('#com_party_place').append(partiesRowDiv);
    
    if(nickname == '') {                        ////если поле поиска пустое, отображаем все пати
        viewAllParties(parties);
        showErrorMessage = false;
    } 
    else {
        showErrorMessage =  viewParties(parties, nickname);
    }
    // if(showErrorMessage){
    //     $('#search_message').text('ничего не найдено');
    // }
}


//функция отображения нужных пати
function viewParties(partiesArray, nickname) {

    getGameByName(getNameGame()).done(function (data) {
        var game = $.parseJSON(data);

        for (let i = 0; i < partiesArray.length; i++) {
            var user;
            var flag = game[0]['game_id'] == partiesArray[i]['game_id'];

            if(flag) {
                getUserById(partiesArray[i]['party_creator']).done(function (data) {
                    user = $.parseJSON(data);
                    var flag = partiesArray[i]['party_creator'] == user[0]['id_user'];

                    if(flag) {
                        var flag = nickname == user[0]['login'];
                        if(flag){
                            getCountPartyMembers(partiesArray[i]['id_party']).done(function (data){
                                var partyMembers = $.parseJSON(data);
                                var gamersInParty = partyMembers[0]['count'];

                                let rowDiv = createNewRow(1);
                                createPartyBlock(1, rowDiv, gamersInParty , partiesArray[i]['gamers_amount'], user[0], partiesArray[i]['id_party']);
                                $('#com_party_place').append(rowDiv);
                                $('#search_message').text('');
                            });
                        } else{
                            $('#search_message').text('ничего не найдено');
                        }

                    }
                });
            }
        }
    });
}

//here{
/*
    console.log(parties.length);
    for (let i = 0; i < parties.length; i++) {
       var currentUser;
        getUserById(parties[i]['party_creator']).done(function(data){
            currentUser = $.parseJSON(data)[0];
            if (currentUser['login'].toUpperCase() == name.toUpperCase()){
                alert('найдено');
                $('#search_message').text('');
                // rowDiv = $('<div>', {
                //     'class': 'row1',
                //     'id': 'rowParty'
                // });
                // rowDiv.text(partyId);
                // $('#com_party_place').append(rowDiv);
                var rowDiv = createNewRow('rowParty');
                var blockDiv;
                
                blockDiv = createPartyBlock(numberPartyOnRow, $('#rowParty'), 0, parties[i]['gamers_amount'], currentUser, i);  
                //blockDiv = createPartyBlock(numberPartyOnRow, $('#rowParty'), 0, parties[i]['gamers_amount'], getUserById(['party_creator']), idParty);
                rowDiv.append(blockDiv);
                $('#com_party_place').append(rowDiv);
                numberPartyOnRow++;
                found++;
            }
        })
}
*/