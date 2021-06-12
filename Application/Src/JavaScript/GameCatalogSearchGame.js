$(document).ready(mainFunction());

function mainFunction() {
    //Событие отправки результата строки поиска
    $('#search').submit(function (obj) {
        obj.preventDefault();

        var name = $('#find_game').val();

        searchGame(gamesArray, name);
    });
    //Событие отправки результата строки поиска по нажатию на иконку поиска
    $('#find_icon').click(function (obj) {
        obj.preventDefault();

        var name = $('#find_game').val();

        searchGame(gamesArray, name);
    });
}
//Функция поиска игры
function searchGame(games, name) {
    var viewAll = false;
    var found = 0;
    var isSetGameVithName;

    $('#search_message').text('');

    var popularGamesRowDiv = $('<div>', {
        'class': 'popular_games_row',
        'id': 'popular_games_row'
    });

    $('#games_block').remove();
    $('#popular_games_row').remove();

    $('#game_catalog').append(popularGamesRowDiv);

    for (let i = 0; i < games.length; i++) {
        isSetGameVithName = games[i]['game_name'].toUpperCase() == name.toUpperCase();
        if(isSetGameVithName) {
            $('#search_message').text('');
            viewGame(games[i], $('#popular_games_row'), popularGamesRowDiv);
            found++;
        }
        if(name === '') {
            viewAll = true;
            break;
        }
    }

    if(viewAll) {
        $('#search_message').text('');
        $('#search_message').text('');
        var gamesBlockDiv = $('<div>', {
            'class': 'games_block',
            'id': 'games_block'
        })
        var gamesRowDiv = $('<div>', {
            'class': 'games_row',
            'id': 'games_row'
        });

        gamesBlockDiv.append(gamesRowDiv);

        $('#popular_games_row').after(gamesBlockDiv);

        viewPopularGames(games);
        viewAllGames(games);
    } else if(found == 0) {
        $('#search_message').text('ничего не найдено');
        $('#games_block').remove();
    }
}