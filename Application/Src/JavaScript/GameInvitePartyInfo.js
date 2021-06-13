$(document).ready(mainFunction());

function mainFunction() {
    viewAllPartyInfo();
}

//Функция получения пати из бд по id
function getPartyById(idParty) {
    return $.ajax({
        url: '../php/get_party_by_id.php',
        type: 'POST',
        data: {idParty : idParty}
    });
}
//Функция отображения общей информации о пати
function viewPartyInfo(party) {
    $("#party_descriprion").text(party['party_description']);
    $("#party_icon").attr('src', party['party_icon']);

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
function getPartyMembers(partyId) {
    return $.ajax({
        url: '../php/get_party_members.php',
        type: "POST",
        data: {
            partyId: partyId
        }
    });
}
//Функция отображения всей информации о пати
function viewAllPartyInfo() {
    $(document).on('click','.come_in', function (obj) {
        obj.preventDefault();

        $("#party_form").show();

        var idParty = $(this).attr('id');

        getPartyById(idParty).done(function (data) {
            var party = $.parseJSON(data)[0];

            viewPartyInfo(party);
            viewMembersParty(party);
        });

    });
}
//Функция отображения участников пати
function viewMembersParty(party) {
    getCountPartyMembers(party['id_party']).done(function (data) {
        var countMembers = $.parseJSON(data)[0]['count'];


        $("#members_counter").empty();

        var membersHereDiv = $('<div>', {
            'class': 'members_here',
            'id': 'members_here'
        }).text(countMembers + '/');

        $("#members_counter").append(membersHereDiv);

        $("#members_counter").append(party['gamers_amount']);

        getPartyMembers(party['id_party']).done(function (data) {
            var partyMembers = $.parseJSON(data);
            console.log(partyMembers.length);

            $("#party_members_form").empty();

            for (let i = 0; i < partyMembers.length; i++) {
                viewMember(partyMembers[i]);
            }
        });


    });
}
function viewMember(member) {
    var party_member_rowDiv = $('<div>', {
        'class': 'party_member_row'
    });
    var party_member_iconDiv = $('<div>', {
        'class': 'party_member_icon'
    });
    var party_member_iconImg = $('<img>', {
        'src': member['user_icon']
    })
    var party_member_nameDiv = $('<div>', {
        'class': 'party_member_name'
    }).text(member['login']);
    var game_nickDiv = $('<div>', {
        'class': 'game_nick'
    }).text(member['nickname']);

    party_member_iconDiv.append(party_member_iconImg);
    party_member_rowDiv.append(party_member_iconDiv);
    party_member_rowDiv.append(party_member_nameDiv);
    party_member_rowDiv.append(game_nickDiv);

    $("#party_members_form").append(party_member_rowDiv);
}