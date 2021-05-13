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
}
