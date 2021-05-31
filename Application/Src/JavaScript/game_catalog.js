$(document).ready(mainFunction());

function mainFunction() {
	var gamesArray;

	//Событие отправки результата строки поиска
	$('#search').submit(function (obj) {
		obj.preventDefault();

		var name = $('#find_game').val();

		searchGame(gamesArray, name);
	});

	//При успешном получении json, обрабатываем его и выводим на экран игры
	getAllGames().done(function (data) {
		gamesArray = $.parseJSON(data);

		viewPopularGames(gamesArray);
		viewAllGames(gamesArray);
	});

	openGamePage();
}
//Получаем массив всех игр
function getAllGames() {
	return $.ajax({
			url: '../php/get_games.php',
			type: 'POST'
	});
}
//Функция поиска игры
function searchGame(games, name) {
	var viewAll = false;
	var found = 0;

	var popularGamesRowDiv = $('<div>', {
		'class': 'popular_games_row',
		'id': 'popular_games_row'
	});

	$('#games_block').remove();
	$('#popular_games_row').remove();

	$('#game_catalog').append(popularGamesRowDiv);

	for (let i = 0; i < games.length; i++) {
		if(games[i]['GameName'].toUpperCase() == name.toUpperCase()) {
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
function open_game_filters(){
	if($(".filters").css("opacity") == "0"){
		$(".filters").animate({"opacity":"0.6"},100)}
 
	else {
		$(".filters").animate({"opacity":"0"},100);
			 }
}
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
		'data-tooltip': game['GameName']
	});
	var gameIconImg = $('<img>', {
		'src': game['GameIconLink'],
		'id': game['GameName']
	});

	gameSpan.append(gameIconImg)
	gamesRow.append(gameSpan);
}
//Функция отображения одной популярной игры
function viewPopularGame(game, gamesRow) {
	var popGameSpan = $('<span>', {
		'class': 'pop_game',
		'id': game['GameName']
	});
	var gameIconImg = $('<img>', {
		'src': game['GameIconLink'],
		'id': game['GameName']
	});

	popGameSpan.append(gameIconImg)
	gamesRow.append(popGameSpan);
}
//Функция отображения 5 популярных игр
function viewPopularGames(gamesArray) {
	var gamesRow = $('#popular_games_row');
	var countPopularGame = 0;
	for (let i = 0; i < gamesArray.length; i++) {
		if(Number(gamesArray[i]['Popularity']) >= 4 && Number(gamesArray[i]['Popularity']) <= 5 && countPopularGame <=5) {
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

		window.location.href = '../html/game.html' + '?GameName=' + gameName;
	});

	$(document).on('click','.pop_game', function (obj) {
		obj.preventDefault();

		var gameName = this.getAttribute('id');

		window.location.href = '../html/game.html' + '?GameName=' + gameName;
	});
}
