$(document).ready(mainFunction());

function mainFunction() {
	getAllGames();;
}
function getAllGames() {
	var gamesArray;

	$.ajax({
		url: '../php/get_games.php',
		type: 'POST',
		dataType: 'html',
		success: function (data) {
			gamesArray = $.parseJSON(data);

			$('#search').submit(function (obj) {
				obj.preventDefault();

				var name = $('#find_game').val();

				searchGame(gamesArray, name);
			});

			viewPopularGames(gamesArray);
			viewAllGames(gamesArray);
			openGamePage(gamesArray);
		}
	});

	return gamesArray;
}
function searchGame(games, name) {
	var gameBlock;
	var view = false;
	var found = 0;

	gameBlock = $('<div>', {
		'class': 'popular_games_row',
		'id': 'popular_games_row'
	});

	$('#games_block').remove();
	$('#popular_games_row').remove();
	$('#game_catalog').append(gameBlock);

	for (let i = 0; i < games.length; i++) {
		if(games[i]['GameName'] == name) {
			$('#search_message').text('');
			viewGame(games[i], $('#popular_games_row'), gameBlock);
			found++;
		}
		if(name === '') {
			view = true;
		}
	}

	if(view) {
		$('#search_message').text('');
		gameBlock = $('<div>', {
			'class': 'games_block',
			'id': 'games_block'
		}).append($('<div>', {
			'class': 'games_row',
			'id': 'games_row'
		}));
		$('#popular_games_row').after(gameBlock);

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
function viewAllGames(gamesArray) {
	var gamesRow = $('#games_row');
	var gameBlock;

	for (let i = 0; i < gamesArray.length; i++) {
		if((i) % 6 != 0) {
			viewGame(gamesArray[i], gamesRow, gameBlock);
		} else {
			gamesRow = createGamesRow(i / 6);
			viewGame(gamesArray[i], gamesRow, gameBlock);
		}

	}
}
function viewGame(game, gamesRow, gameBlock) {
	gameBlock = $('<span>', {
		'class': 'game',
		'data-tooltip': game['GameName']
	});
	gameBlock.append($('<img>', {
		'src': game['GameIconLink'],
		'id': game['GameName']
	}));

	gamesRow.append(gameBlock);
}
function viewPopularGame(game, gamesRow, gameBlock) {
	gameBlock = $('<span>', {
		'class': 'pop_game',
		'id': game['GameName']
	});
	gameBlock.append($('<img>', {
		'src': game['GameIconLink'],
		'id': game['GameName']
	}));

	gamesRow.append(gameBlock);
}
function viewPopularGames(gamesArray) {
	var gamesRow = $('#popular_games_row');
	var gameBlock;
	var countPopularGame = 0;
	for (let i = 0; i < gamesArray.length; i++) {
		if(Number(gamesArray[i]['Popularity']) >= 4 && Number(gamesArray[i]['Popularity']) <= 5 && countPopularGame <=5) {
			viewPopularGame(gamesArray[i], gamesRow, gameBlock);
			countPopularGame++;
		}
		if(countPopularGame == 5) break;
	}
}
function createGamesRow(id) {
	var gameBlock  = $('<div>', {
		'class': 'games_row',
		'id': 'games_row' + id
	});

	$('#games_block').append(gameBlock);
	return $('#games_row' + id);
}
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
