var gamesArray;
$(document).ready(mainFunction());

function mainFunction() {
    //При успешном получении json, обрабатываем его и выводим на экран игры
    getAllGames().done(function (data) {
        gamesArray = $.parseJSON(data);

        viewPopularGames(gamesArray);
        viewAllGames(gamesArray);
    });
}
//Получаем массив всех игр
function getAllGames() {
    return $.ajax({
        url: '../php/get_games.php'
    });
}
//Функция отображения одной популярной игры
function viewPopularGame(game, gamesRow) {
    var popGameSpan = $('<span>', {
        'class': 'pop_game',
        'id': game['game_name']
    });
    var gameIconImg = $('<img>', {
        'src': game['game_icon_link'],
        'id': game['game_name']
    });

    popGameSpan.append(gameIconImg)
    gamesRow.append(popGameSpan);
}
//Функция отображения 5 популярных игр
function viewPopularGames(gamesArray) {
    var gamesRow = $('#popular_games_row');
    var countPopularGame = 0;
    for (let i = 0; i < gamesArray.length; i++) {
        if(Number(gamesArray[i]['popularity']) >= 4 && Number(gamesArray[i]['popularity']) <= 5 && countPopularGame <=5) {
            viewPopularGame(gamesArray[i], gamesRow);
            countPopularGame++;
        }
        if(countPopularGame == 5) break;
    }
}
//Функция создания новой строки для отображения игр
function createGamesRow(id) {
    var gamesRowDiv  = $('<div>', {
        'class': 'games_row',
        'id': 'games_row' + id
    });

    $('#games_block').append(gamesRowDiv);
    return $('#games_row' + id);
}
//Функция отображения одной игры в определённой строке
function viewGame(game, gamesRow) {
    var gameSpan = $('<span>', {
        'class': 'game',
        'data-tooltip': game['game_name']
    });
    var gameIconImg = $('<img>', {
        'src': game['game_icon_link'],
        'id': game['game_name']
    });

    gameSpan.append(gameIconImg)
    gamesRow.append(gameSpan);
}
//Функция отображения всех игр
function viewAllGames(gamesArray) {
    var gamesRow = $('#games_row');

    for (let i = 0; i < gamesArray.length; i++) {
        if((i) % 6 != 0) {
            viewGame(gamesArray[i], gamesRow);
        } else {
            gamesRow = createGamesRow(i / 6);
            viewGame(gamesArray[i], gamesRow);
        }

    }
}
