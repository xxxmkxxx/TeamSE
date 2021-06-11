$(document).ready(mainFunction());

function mainFunction() {
	var game;
	var comments;
	var users;
	var partyes;

	//Скрываем форму создания пати
	$("#party_form").hide();

	//Слушатель нажатия на иконку открытия пати
	openPartyForm();

	//Подключение сессии
	connectSession();

	//Слушатель нажатия на лого
	openCatalogGames();

	//Слушатель нажатия на иконку записи комментария
	open_new_com_form();

	//Слушатель иконки закрытия пати
	closePartyForm();

	getGame(getNameGame()).done(function (data) {
		game = $.parseJSON(data)[0];

		viewAllInfo(game);

		getAllComments(game).done(function (data) {
			comments = $.parseJSON(data);

			getAllUsers().done(function (data) {
				users = $.parseJSON(data);

				viewAllComments(comments, users, 3);

				getAllParty().done(function (data) {
					partyes = $.parseJSON(data);

					viewAllPartyes(partyes, users, game);
				});
			});
		});
	});
}

//функция открытия формы меню
function open_menu(){
	if($(".menu").css("display") == "none"){
		$('.menu').show(0, function() { 
			$(".menu").css("display","inline-flex");
			$(".party_filters").css("margin-top","10.4vw")})
	}
	else $('.menu').hide('slow', function() { 
			$(".menu").css("display","none");
			$(".party_filters").css("margin-top","7.5vw")})
}

//функция открытия формы создания пати 
function open_party_creator(){
	$('.create_party_form').slideDown(200)		
	}

//функция закрытия формы создания пати
function close_party_creator(){
	$('.create_party_form').slideUp(200)
}

function outputchange() {
	let val = document.getElementById("filter_range").value;
	document.getElementById("ouput_range").innerHTML = val;
}
//функция открытия формы с фильтрами выбора пати
function filters(){
	if($(".party_filters").css("display") == "none"){
		$(".party_filters").slideDown(200);
	}
	else $('.party_filters').slideUp(200);
}
//функция открытия формы создания отзыва
function open_new_com_form(){
	$(document).on('click','.write', function (obj) {
		if($(".write_commment").css("display") == "none"){
			$(".write_commment").slideDown(200);
			$(".review_block2").animate({"margin-top": "13vw"}, 500);
		}
		else {
			$('.write_commment').slideUp(200);
			$(".review_block2").animate({"margin-top": "0vw"}, 500);
		}
	});
}
function getGame(name) {
	return $.ajax({
		url: '../php/get_game.php',
		data: { val : name }
	});
}
//Функция получения имени игры из ссылки
function getNameGame() {
	var url_str = window.location.href;
	var url = new URL(url_str);
	var mail = url.searchParams.get('GameName');

	return mail;
}
//Функция вывода всей информации об игре
function viewAllInfo(game) {
	$('#game_name').text(game['game_name']);
	$('#game_description').text(game['game_description']);
	$('#game_icon').attr('src', game['game_icon_link']);
}
//Функция для получения массива всех комментраиев
function getAllComments(game) {
	return $.ajax({
		url: '../php/get_comments.php',
		data: { val : game['game_id']}
	});
}
//Функция для отображения части комментариев
function viewAllComments(comments, users, countComments) {
	if(comments.length != 0) {
		for (let i = 0; i < countComments; i++) {
			for (let j = 0; j < users.length; j++) {
				if(users[j]['id_user'] == i) {
					viewComment(comments[i], i + 1, users[j]);
				}
			}
		}
	}
}
//Функция отображения одного комментария
function viewComment(comment, number, user) {
	var commentDiv = $('<div>', {
		'class': 'comment',
		'id': number
	});

	var div_author_data = $('<div>', {
		'class': 'author_data'
	});

	var div_comment_text = $('<div>', {
		'class': 'comment_text'
	}).text(comment['comment_text']);

	var span_author_icon = $('<span>', {
		'class': 'author_icon',
		'id': 'author_icon'
	});

	var span_author_name = $('<span>', {
		'class': 'author_name',
	}).text(user['login']);

	var img = $('<img>', {
		'src': user['user_icon']
	});

	span_author_icon.append(img);
	div_author_data.append(span_author_icon);
	div_author_data.append(span_author_name);
	commentDiv.append(div_author_data);
	commentDiv.append(div_comment_text);

	$('#review_block2').append(commentDiv);
}
//Функция получения массива всех пользователей
function getAllUsers() {
	return $.ajax({
		url: '../php/get_users.php',
		dataType: 'html'
	});
}
//Функция получения массива всех пати
function getAllParty() {
	return $.ajax({
		url: '../php/get_partys.php',
		dataType: 'html'
	});
}
//Функция отображения всех пати
function viewAllPartyes(partyes, users, game) {
	var numberPartyOnRow = 0;
	var rowParty = $('#rowParty');
	var arrayParty = new Array();
	var arrayUsers = new Array();

	for (let i = 0; i < partyes.length; i++) {
		if(partyes[i]['game_id'] == game['game_id']) {
			for (let j = 0; j < users.length; j++) {
				if (partyes[i]['party_creator'] == users[j]['id_user']) {
					arrayParty.push(partyes[i]);
					arrayUsers.push(users[j]);
				}
			}
		}
	}
	for (let i = 0; i < arrayParty.length; i++) {
		if(i % 3 != 0) {
			numberPartyOnRow++;

			createPartyBlock(numberPartyOnRow + 1, rowParty, arrayParty[i]['gamers_amount'], 5, arrayUsers[i], arrayParty[i]['id_party']);
		} else {
			numberPartyOnRow = 0;

			rowParty = createNewRow(i / 3);
			createPartyBlock(numberPartyOnRow + 1, rowParty, arrayParty[i]['gamers_amount'], 5, arrayUsers[i]), arrayParty[i]['id_party'];
		}
	}
}
//Функция создания блока, где распологаются строки с пати
function createPartyBlock(numberPartyOnRow, rowParty, countPlayers, allCountPlayers, creater, idParty) {
	var partySpan = $('<span>', {
		'class': 'form' + numberPartyOnRow
	});

	var div_row2 = $('<div>', {
		'class': 'row2'
	});

	var span_participans = $('<span>', {
		'class': 'participans'
	}).text(countPlayers + ' из ' + allCountPlayers + ' игроков');

	var span_come_in = $('<span>', {
		'id': idParty,
		'class': 'come_in'
	});

	var img_come_in = $('<img>', {
		'src': '../images/come_in_icon.png'
	});

	var div_formsdata = $('<div>', {
		'class': 'formsdata'
	});

	var span_form_img = $('<span>', {
		'class': 'form_img'
	});

	var img_form_img = $('<img>', {
		'src': creater['user_icon']
	});

	var span_party_creator = $('<span>', {
		'class': 'party_creator'
	}).text(creater['login']);

	span_come_in.append(img_come_in);
	div_row2.append(span_participans);
	div_row2.append(span_come_in);
	span_form_img.append(img_form_img);
	div_formsdata.append(span_form_img);
	div_formsdata.append(span_party_creator);
	partySpan.append(div_formsdata);
	partySpan.append(div_row2);

	rowParty.append(partySpan);
}
//Функция создания строки пати
function createNewRow(id) {
	var rowDiv = $('<div>', {
		'class': 'row1',
		'id': 'rowParty' + id
	});

	$('#com_party_place').append(rowDiv);

	return $('#rowParty' + id);
}
//Функция открытия формы пати
function openPartyForm() {
	$(document).on('click','.come_in', function (obj) {
		obj.preventDefault();

		var idParty = this.getAttribute('id');

		$("#party_form").show();
	});
}
//Функция закрытия пати
function closePartyForm() {
	$(document).on('click','#close_party_form', function (obj) {
		obj.preventDefault();

		var idParty = this.getAttribute('id');

		$("#party_form").hide();
	});
}
//Слушатель нажатия на лого
function openCatalogGames() {
	$(document).on('click','.click_logo', function (obj) {
		window.location.href = '../html/game_catalog.html?logining=1';
	});
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