
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
