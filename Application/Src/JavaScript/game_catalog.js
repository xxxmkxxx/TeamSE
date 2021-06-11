$(document).ready(mainFunction());

function mainFunction() {
	var gamesArray;
	var filtersArray = new Array();

	connectSession();
	//Событие отправки результата строки поиска
	$('#search').submit(function (obj) {
		obj.preventDefault();

		var name = $('#find_game').val();

		searchGame(gamesArray, name);
	});
	//Событие нажатия на кнопку фильтрации(применить)
	$('#send_filters').click(function (obj) {
		obj.preventDefault();
		var gamesByFiltersArray;
		filtersArray = new Array();

		getAllGamesByFilters().done(function (data) {
			gamesByFiltersArray = $.parseJSON(data);

			var arrayDiv = document.getElementById('genres').getElementsByTagName('div');

			for (let i = 0; i < arrayDiv.length; i++) {
				if(arrayDiv[i].getElementsByTagName('input')[0].checked) {
					filtersArray.push(arrayDiv[i].getElementsByTagName('input')[0].value);
				}
			}

			if(filtersArray.length == 0) {
				var popularGamesRowDiv = $('<div>', {
					'class': 'popular_games_row',
					'id': 'popular_games_row'
				});

				$('#game_catalog').append(popularGamesRowDiv);

				$('#games_block').remove();
				$('#popular_games_row').remove();

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

				viewPopularGames(gamesArray);
				viewAllGames(gamesArray);
			} else {
				searchGamesByFilters(gamesByFiltersArray, filtersArray);
			}
		});
	});
	//При успешном получении json, обрабатываем его и выводим на экран игры
	getAllGames().done(function (data) {
		gamesArray = $.parseJSON(data);

		viewPopularGames(gamesArray);
		viewAllGames(gamesArray);
	});

	//Слушатель нажатия на иконку фильтров
	openGameFilters();

	openGamePage();
}
function getLoginingStatus() {
	var url_str = window.location.href;
	var url = new URL(url_str);
	return url.searchParams.get('logining');
}
//Функция подключения сессии
function connectSession(){
	$.ajax({
		url: '../php/SessionModul.php',
		data: { logining: getLoginingStatus()},
		success: function (data) {
			var session = $.parseJSON(data);
			$("#profile").text(session['login']);
		}
	});
}
//Получаем массив всех игр
function getAllGames() {
	return $.ajax({
			url: '../php/get_games.php',
			type: 'POST'
	});
}
//Получаем массив всех игр c жанрами
function getAllGamesByFilters() {
	return $.ajax({
		url: '../php/get_games_by_filters.php',
		type: 'POST'
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
//Функция поиска игр по фильтрам
function searchGamesByFilters(games, filters) {
	var resultArrayGames = new Array();
	var isSetGameVithFilter;

	var popularGamesRowDiv = $('<div>', {
		'class': 'popular_games_row',
		'id': 'popular_games_row'
	});

	$('#games_block').remove();
	$('#popular_games_row').remove();

	$('#game_catalog').append(popularGamesRowDiv);

	for (let i = 0; i < filters.length; i++) {
		for (let j = 0; j < games.length; j++) {
			isSetGameVithFilter = games[j]['genre'] == filters[i];

			if(isSetGameVithFilter) {
				resultArrayGames.push(games[j]);
			}
		}
	}

	if(resultArrayGames.length == 0) {
		$('#search_message').text('ничего не найдено');
		$('#games_block').remove();
	} else {
		for (let i = 0; i < resultArrayGames.length; i++) {
			viewGame(resultArrayGames[i], $('#popular_games_row'), popularGamesRowDiv);
		}
	}
}
//функция открытия формы меню
function open_menu(){
	if($(".menu").css("display") == "none"){
		$('.menu').show(0, function() {
			$(".menu").css("display","inline-flex");
			$(".filters").css("margin-top","11vh")})
	}
	else $('.menu').hide('slow', function() {
			$(".menu").css("display","none");
			$(".filters").css("margin-top","5vh")})
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
//Функция для перехода на страницу игры по нажатию на иконку игры
function openGamePage() {
	$(document).on('click','.game', function (obj) {
		obj.preventDefault();

		var gameName = this.getAttribute('data-tooltip');

		window.location.href = '../html/game.html' + '?GameName=' + gameName + "&logining=1";
	});

	$(document).on('click','.pop_game', function (obj) {
		obj.preventDefault();

		var gameName = this.getAttribute('id');

		window.location.href = '../html/game.html' + '?GameName=' + gameName + "&logining=1";
	});
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