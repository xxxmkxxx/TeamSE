$(document).ready(mainFunction());

function mainFunction() {
    // вызов функции предварительного просмотра загружаемого изображения
    $("#file").change(function() {
        readURL(this);
    });
}
//функция предварительного просмотра загружаемого изображения
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
//разворачивание и сворачивание формы с паролем в форме создания пати
const privacy = document.getElementById('privacy')

privacy.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        $(".password_form").css("display","block");
        $(".create_party_form").animate({"height": "38vw"}, 0);

    } else {
        $(".password_form").css("display","none");
        $(".create_party_form").animate({"height": "36vw"}, 0);
    }
})