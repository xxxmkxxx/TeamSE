$(document).ready(mainFunction());

function mainFunction() {
    //Событие нажатия на кнопку фильтрации(применить)
    // $(document).on('click','#apply_party_filt');
    $('#apply_party_filt').click(function (obj) {
        //obj.preventDefault();

        let filtersStatus = getFiltersStatus();
        //console.log(filtersStatus);
        getAllParties().done(function(data){
            let partiesArray = $.parseJSON(data);
            searchPartyFilters(partiesArray, filtersStatus);
        });
    });
}


function getFiltersStatus(){
    let private = $('#privacy_filter1').prop('checked');
    let public = $('#privacy_filter2').prop('checked');

    return {
        private: private, 
        public: public    
    };
}


//функция фильтра пати               //nickname
function searchPartyFilters(parties, filtersStatus) {
    showErrorMessage = true;
    $('#search_message').text('');           //сообщение сверху отображенных пати

    $('#com_party_place').empty();

    // var partiesRowDiv = $('<div>', {
    //     'class': 'row1',
    //     'id': 'rowParty'
    // });
    // $('#com_party_place').append(partiesRowDiv);
    
    if(filtersStatus.private == filtersStatus.public) {  ////если отмечены обе галочки либо не отмечены обе галочки, отображаем все пати
        getGameByName(getNameGame()).done(function (data) {
            var game = $.parseJSON(data);
            viewAllParties(parties, game[0]['game_id']);

        });
    }
    else{
        viewPartiesFilters(parties, filtersStatus);
    }
}



//функция отображения нужных пати
function viewPartiesFilters(partiesArray, filtersStatus) {
    var numberPartyOnRow = 0;
    var numberRow = 1;
    var rowParty = $('#rowParty');
    $("#com_party_place").empty();
    getGameByName(getNameGame()).done(function (data) {
        var showErrorMessage = true;
        var game = $.parseJSON(data);
        if (filtersStatus.private == true){
            var fStatus = 'закрытая';
        } else {
            var fStatus = 'открытая';
        }
        for (let i = 0; i < partiesArray.length; i++) {
                getCountPartyMembers(partiesArray[i]['id_party']).done(function (data){
                    var gamersInParty = $.parseJSON(data)[0]['count'];
                    var user;
                    var flag = game[0]['game_id'] == partiesArray[i]['game_id'];
    
                    if(flag) {
                        getUserById(partiesArray[i]['party_creator']).done(function (data) {
                            user = $.parseJSON(data);
                            if(partiesArray[i]['privacy'] == fStatus){
                                if(numberPartyOnRow % 3 != 0) {
                                    createPartyBlock(numberPartyOnRow + 1, rowParty, gamersInParty , partiesArray[i]['gamers_amount'], user[0], partiesArray[i]['id_party']);
                                } else {
                                    numberPartyOnRow = 0;
                                    rowParty = createNewRow(numberRow);
                                    numberRow++;
                                    createPartyBlock(numberPartyOnRow + 1, rowParty, gamersInParty , partiesArray[i]['gamers_amount'], user[0], partiesArray[i]['id_party']);
                                }
                                numberPartyOnRow++;
                                showErrorMessage = false;
                                $('#search_message').text('');
                            } else if(showErrorMessage){
                                $('#search_message').text('ничего не найдено');
                            }
                        });
                    }
            });
        }
        // if (showErrorMessage){
        //     $('#search_message').text('ничего не найдено');
        // }
    });
}