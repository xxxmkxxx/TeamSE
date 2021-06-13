
// функция окрашивания border в зеленый и тд
function ready_nick(){
	$(document).on('click','#ready_button', function (obj) {
        obj.preventDefault();

        $("#my_nick").css("border-color", "#76D874");
        $('#my_nick').attr('readonly', true);
        $("#edit_icon").css("display","flex");
    });

    $(document).on('click','#edit_icon', function (obj) {
        obj.preventDefault();
        $("#my_nick").css("border-color", "#2B3E8A");
        $('#my_nick').attr('readonly', false);
         $("#edit_icon").css("display","none");
    });

    $(document).on('click','#exit_button', function (obj) {
        obj.preventDefault();

        $("#party_form").hide();
    });
}









ready_nick();