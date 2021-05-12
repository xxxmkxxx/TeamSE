$(document).ready(mainFunction());

function mainFunction() {
	getGames();
}
function getGames() {
	var regData = $("#sing_in").serialize();

	$.ajax({
		url: '../php/game_catalog.php',
		type: 'POST',
		dataType: 'html',
		data: regData,
		success: function (data) {
			var gamesRow = $('#games_row');
			var gameBlock;
			var game;
			var gamesArray = $.parseJSON(data);

			for (let i = 0; i < gamesArray.length; i++) {
				game = gamesArray[i];

				gameBlock = $('<span>', {
					'class': 'game',
					'data-tooltip': game['GameDescription']
				});
				gameBlock.append($('<img>', {
					'src': game['GameIconLink']
				}));

				gamesRow.append(gameBlock);
			}
		}
	});
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
