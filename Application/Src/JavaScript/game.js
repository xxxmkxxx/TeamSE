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
		}
	});
}