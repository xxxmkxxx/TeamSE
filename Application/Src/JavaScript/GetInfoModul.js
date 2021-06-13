//Функция получения имени игры из ссылки
function getNameGame() {
    var url_str = window.location.href;
    var url = new URL(url_str);
    var gameName = url.searchParams.get('GameName');

    return gameName;
}
//Функция получение игры из бд по имени игры
function getGameByName(gameName) {
    return $.ajax({
        url: '../php/get_game_by_name.php',
        type: 'POST',
        data: {gameName : gameName}
    });
}
//Функция получение пользователя из бд по id пользователя
function getUserById(userId) {
    return $.ajax({
        url: '../php/get_user_by_id.php',
        type: 'POST',
        data: {userId : userId}
    });
}
//Функция получения статуса авторизации
function getLoginingStatus() {
    var url_str = window.location.href;
    var url = new URL(url_str);
    return url.searchParams.get('logining');
}
//Функция подключения сессии
function connectSession(){
    $.ajax({
        url: '../php/SessionModul.php',
        data: { logining: getLoginingStatus()},
        success: function (data) {
            var session = $.parseJSON(data);
            $("#profile").text(session['login']);
        }
    });
}
//Функция получения текущей сессии
function getSession(){
    return $.ajax({
        url: '../php/SessionModul.php',
        data: { logining: getLoginingStatus()},
    });
}
//функция закрытия формы с фильтрами выбора пати по нажатию вне данной формы
function closeOutZoneForm(idFormFilters) {
    $(function(){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $("#" + idFormFilters); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.slideUp(200); // скрываем его
            }
        });
    });
}
//функция открытия формы меню
function open_menu(){
    $('#menu_icon').click(function () {
        if($(".menu").css("display") == "none"){
            $('.menu').show(0, function() {
                $(".menu").css("display","inline-flex");
                $(".party_filters").css("margin-top","10.4vw")})
        }
        else $('.menu').hide('slow', function() {
            $(".menu").css("display","none");
            $(".party_filters").css("margin-top","7.5vw")})
    });
}
function insSortJsonArr(jsonArray, key, isGreatestToLeast){

    for(var i = 1; i < jsonArray.length; i++){

        var next = jsonArray[i];
        var j = i;

        if(isGreatestToLeast){

            while(j > 0 &&  next[key] >  jsonArray[j - 1][key]){

                jsonArray[j] = jsonArray[j - 1];
                j--;
            }
        } else{

            while(j > 0 &&  jsonArray[j - 1][key] < next[key]){

                jsonArray[j] = jsonArray[j - 1];
                j--;
            }
        }

        jsonArray[j] = next;
    }
    return jsonArray;
}