
$(document).ready(mainFunction());

function mainFunction() {
    ready_nick();
    //Скрываем форму создания пати
    $("#party_form").hide();
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
    $(document).on('click','.write', function () {
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
// функция окрашивания border в зеленый и тд
function ready_nick(){
    $(document).on('click','#ready_button', function (obj) {
        obj.preventDefault();

        $("#my_nick").css("border-color", "#76D874");
        $('#my_nick').attr('readonly', true);
        $("#edit_icon").css("display","flex");

        var idParty = $(this).attr('id');
        // getSession().done(function (data) {
        //     var session = $.parseJSON(data);
        //
        //     setPartyMember(idParty, session['id'], 'обычный');
        // });
    });

    $(document).on('click','#edit_icon', function (obj) {
        obj.preventDefault();
        $("#my_nick").css("border-color", "#2B3E8A");
        $('#my_nick').attr('readonly', false);
        $("#edit_icon").css("display","none");

        // getSession().done(function (data) {
        //     var session = $.parseJSON(data);
        //
        //     $.ajax({
        //         url: '../php/delete_member_party.php',
        //         type: "POST",
        //         data: {
        //             partyMembers: session['id']
        //         }
        //     });
        // });
    });

    $(document).on('click','#exit_button', function (obj) {
        obj.preventDefault();

        // getSession().done(function (data) {
        //     var session = $.parseJSON(data);
        //
        //     $.ajax({
        //         url: '../php/delete_member_party.php',
        //         type: "POST",
        //         data: {
        //             partyMembers: session['id']
        //         }
        //     });
        // });

        $("#party_form").hide();
    });
}
