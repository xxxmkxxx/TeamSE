$(document).ready(mainFunction());

function mainFunction() {
    var game;

    getGameByName(getNameGame()).done(function (data) {
        game = $.parseJSON(data);

        viewAllInfo(game[0]);
    });
}
//Функция вывода всей информации об игре
function viewAllInfo(game) {
    $('#game_name').text(game['game_name']);
    $('#game_description').text(game['game_description']);
    $('#game_icon').attr('src', game['game_icon_link']);
}