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
//Функция получение игры из бд по id игры
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