
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

function open_party_creator(){
	$('.create_party_form').slideDown(200)		
	}

function close_party_creator(){
	$('.create_party_form').slideUp(200)
}

