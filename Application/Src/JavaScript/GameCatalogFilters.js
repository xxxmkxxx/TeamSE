$(document).ready(mainFunction());

function mainFunction() {
    //Слушатель нажатия на иконку фильтров
    openGameFilters();
    //Событие нажатия на кнопку фильтрации(применить)
    $('#send_filters').click(function (obj) {
        obj.preventDefault();
        var gamesByFiltersArray;
        var filtersArray = new Array();

        getAllGamesByFilters().done(function (data) {
            gamesByFiltersArray = $.parseJSON(data);

            var arrayDiv = document.getElementById('genres').getElementsByTagName('div');

            for (let i = 0; i < arrayDiv.length; i++) {
                if(arrayDiv[i].getElementsByTagName('input')[0].checked) {
                    filtersArray.push(arrayDiv[i].getElementsByTagName('input')[0].value);
                }
            }

            if(filtersArray.length == 0) {
                $('#games_block').empty();
                $('#popular_games_row').empty();

                viewPopularGames(gamesArray);
                viewAllGames(gamesArray);
            } else {
                searchGamesByFilters(gamesByFiltersArray, filtersArray);
            }
        });
    });
}
//Получаем массив всех игр c жанрами
function getAllGamesByFilters() {
    return $.ajax({
        url: '../php/get_games_by_filters.php',
        type: 'POST'
    });
}
//Функция поиска игр по фильтрам
function searchGamesByFilters(games, filters) {
    var resultArrayGames = new Array();
    var isSetGameVithFilter;

    $('#games_block').empty();
    $('#popular_games_row').empty();

    for (let i = 0; i < filters.length; i++) {
        for (let j = 0; j < games.length; j++) {
            isSetGameVithFilter = games[j]['genre'] == filters[i];

            if(isSetGameVithFilter) {
                var coincidences = false;

                for (let k = 0; k < resultArrayGames.length; k++) {
                    if(games[j]['game_id'] == resultArrayGames[k]['game_id']){
                        coincidences = true;
                        break;
                    }
                }

                if(!coincidences) {
                    resultArrayGames.push(games[j]);
                }
            }
        }
    }

    if(resultArrayGames.length == 0) {
        $('#search_message').text('ничего не найдено');
        $('#games_block').empty();
    } else {
        viewAllGames(resultArrayGames);
    }
}
//Функция для открытия формы с фильтрами
function openGameFilters() {
    $(document).on('click','.filter_icon', function (obj) {
        obj.preventDefault();

        if($(".filters").css("display") == "none"){
            $(".filters").slideDown(200);

            getFiltersByGenres().done(function (data) {
                var genres = $.parseJSON(data);

                viewAllGenres(genres);
            });
        } else
            $('.filters').slideUp(200);
    });
}
//Функция для отображения всех жанров
function viewAllGenres(genres) {
    var categGenresDiv = $('<div>', {
        'class': 'categ',
        'id': 'genres'
    });

    $('#genres').remove();

    for (let i = 0; i < genres.length; i++) {
        categGenresDiv.append(createFilter(genres[i]['genre']));
    }

    $('#take_categ').append(categGenresDiv);
}
//Функция для получения списка фильтров по жанрам из бд
function getFiltersByGenres() {
    return $.ajax({
        url: '../php/get_genres.php',
        type: 'POST'
    });
}
//Функция для создания 1 жанра
function createFilter(name) {
    var categ_itemDiv = $('<div>', {
        'class': 'categ_item'
    });
    var inputCheckbox = $('<input>', {
        'type': 'checkbox',
        'value': name
    });

    categ_itemDiv.append(inputCheckbox);
    categ_itemDiv.append(name);

    return categ_itemDiv;
}