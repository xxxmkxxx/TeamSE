$(document).ready(mainFunction());

function mainFunction() {
	getGame(getNameGame());
}
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

function open_party_creator(){
	$('.create_party_form').slideDown(200)		
	}

function close_party_creator(){
	$('.create_party_form').slideUp(200)
}

function outputchange() {
	let val = document.getElementById("filter_range").value;
	document.getElementById("ouput_range").innerHTML = val;
}

function filters(){
	if($(".party_filters").css("display") == "none"){
		$(".party_filters").slideDown(200);
	}
	else $('.party_filters').slideUp(200);
}
function getGame(name) {
	$.ajax({
		url: '../php/get_game.php',
		data: { val : name },
		success: function (data) {
			var game = $.parseJSON(data)[0];

			setAllInfo(game);

		}
	});
}
function getNameGame() {
	var url_str = window.location.href;
	var url = new URL(url_str);
	var mail = url.searchParams.get('GameName');

	return mail;
}
function setAllInfo(game) {
	$('#game_name').text(game['GameName']);
	$('#game_description').text(game['GameDescription']);
	$('#game_icon').attr('src', game['GameIconLink']);

	getAllComments(game);
}
function getAllComments(game) {
	$.ajax({
		url: '../php/get_comments.php',
		data: { val : game['id_game']},
		success: function (data) {
			var comments = $.parseJSON(data);
			getAllUsers(comments);
		}
	});
}
function setComments(comments, users) {
	var commentBlock;

	for (let i = 0; i <= 2; i++) {
		for (let j = 0; j < users.length; j++) {
			if(users[j]['id_user'] == i) {
				createComment(comments[i], commentBlock, i + 1, users[j]);
			}
		}
	}
}
function createComment(comment, commentBlock, number, user) {
	commentBlock = $('<div>', {
		'class': 'comment',
		'id': number
	});

	var div_author_data = $('<div>', {
		'class': 'author_data'
	});

	var div_comment_text = $('<div>', {
		'class': 'comment_text'
	}).text(comment['CommentText']);

	var span_author_icon = $('<span>', {
		'class': 'author_icon',
		'id': 'author_icon'
	});

	var span_author_name = $('<span>', {
		'class': 'author_name',
	}).text(user['Login']);

	var img = $('<img>', {
		'src': user['UserIcon']
	});

	span_author_icon.append(img);
	div_author_data.append(span_author_icon);
	div_author_data.append(span_author_name);
	commentBlock.append(div_author_data);
	commentBlock.append(div_comment_text);

	$('#review_block2').append(commentBlock);
}
function getAllUsers(comments) {
	$.ajax({
		url: '../php/get_users.php',
		dataType: 'html',
		success: function (data) {
			var users = $.parseJSON(data);
			setComments(comments, users);
			getAllParty(users);
		}
	});
}
function getAllParty(users) {
	$.ajax({
		url: '../php/get_partys.php',
		dataType: 'html',
		success: function (data) {
			var partyes = $.parseJSON(data);
			setAllPartyes(partyes, users);
		}
	});
}
function setAllPartyes(partyes, users) {
	var numberPartyOnRow = 0;
	var partyBlock;
	var rowParty = $('#rowParty');

	for (let i = 0; i < partyes.length; i++) {
		if(i % 3 != 0) {
			numberPartyOnRow++;

			for (let j = 0; j < users.length; j++) {
				if(partyes[i]['PartyCreator'] == users[j]['id_user']) {
					createPartyBlock(numberPartyOnRow + 1, partyBlock, rowParty, partyes[i]['GamersAmount'], 5, users[j]);
				}
			}
		} else {
			numberPartyOnRow = 0;

			rowParty = createNewRow(i / 3);

			for (let j = 0; j < users.length; j++) {
				if(partyes[i]['PartyCreator'] == users[j]['id_user']) {
					createPartyBlock(numberPartyOnRow + 1, partyBlock, rowParty, partyes[i]['GamersAmount'], 5, users[j]);
				}
			}
		}
	}
}
function createPartyBlock(number, partyBlock, rowParty, countPlayers, allCountPlayers, creater) {
	partyBlock = $('<span>', {
		'class': 'form' + number
	});

	var div_row2 = $('<div>', {
		'class': 'row2'
	});

	var span_participans = $('<span>', {
		'class': 'participans'
	}).text(countPlayers + ' из ' + allCountPlayers);

	var span_come_in = $('<span>', {
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
		'src': creater['UserIcon']
	});

	var span_party_creator = $('<span>', {
		'class': 'party_creator'
	}).text(creater['Login']);

	span_come_in.append(img_come_in);
	div_row2.append(span_participans);
	div_row2.append(span_come_in);
	span_form_img.append(img_form_img);
	div_formsdata.append(span_form_img);
	div_formsdata.append(span_party_creator);
	partyBlock.append(div_formsdata);
	partyBlock.append(div_row2);

	rowParty.append(partyBlock);
}
function createNewRow(id) {
	var div_row = $('<div>', {
		'class': 'row1',
		'id': 'rowParty' + id
	});

	$('#com_party_place').append(div_row);

	return $('#rowParty' + id);
}