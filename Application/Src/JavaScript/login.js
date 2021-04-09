$(document).ready(function(){
    $("#sing_in").on("submit", function(obj){
        obj.preventDefault();

        $.ajax({
            url: '../php/login.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                $('#main_form_reg_name').html(data);
            }
        });
    });
})