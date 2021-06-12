$(document).ready(mainFunction());

function mainFunction() {
    //Подключение сессии
    connectSession();
    //Слушатель нажатия на иконки игр
    openGamePage();
}
//Функция для перехода на страницу игры по нажатию на иконку игры
function openGamePage() {
    $(document).on('click','.game', function (obj) {
        obj.preventDefault();

        var gameName = this.getAttribute('data-tooltip');

        window.location.href = '../html/game.html' + '?GameName=' + gameName + "&logining=1";
    });

    $(document).on('click','.pop_game', function (obj) {
        obj.preventDefault();

        var gameName = this.getAttribute('id');

        window.location.href = '../html/game.html' + '?GameName=' + gameName + "&logining=1";
    });
}