$(document).ready(mainFunction());

function mainFunction() {
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
    //Слушатель нажатия вне зоны формы фильтров
    closeOutZoneForm('party_filters');
    //Слушатель нажатия на иконку меню
    open_menu();
}

//Функция открытия формы пати
function openPartyForm() {
    $(document).on('click','.come_in', function (obj) {
        obj.preventDefault();

        $("#party_form").show();
    });
}
//Слушатель нажатия на лого
function openCatalogGames() {
    $(document).on('click','.click_logo', function (obj) {
        window.location.href = '../html/game_catalog.html?logining=1';
    });
}
//Функция закрытия пати
function closePartyForm() {
    $(document).on('click','#close_party_form', function (obj) {
        obj.preventDefault();

        $("#party_form").hide();
    });
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