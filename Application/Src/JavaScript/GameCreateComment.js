$(document).ready(mainFunction());

function mainFunction() {
    var game;
    getGameByName(getNameGame()).done(function (data) {
        game = $.parseJSON(data)[0];
        getSession().done(function (data) {
            var session = $.parseJSON(data);

            createComment(game['game_id'], session['id']);
        });
    });
}
//Функция для отправки комментария в бд
function createComment(gameId, userId) {
    $('#write_commment_form').submit(function (obj) {
        obj.preventDefault();

        var commentText = $('#write_commment_area').val();

        if(isCorrect(commentText)) {
            $.ajax({
                url: '../php/set_comment.php',
                type: 'POST',
                data: {gameId: gameId, userId: userId, commentText: commentText}
            });

            $('.write_commment').slideUp(200);
            $(".review_block2").animate({"margin-top": "0vw"}, 500);
        }
    });   
}
//Функция проверки корректности информации в поле
function isCorrect(value) {
    var flag;
    var isExistsFlag = value != '';
    var isMoreNormalLengthFlag = value.length > 10;

    flag = isExistsFlag && isMoreNormalLengthFlag;
    return flag;
}