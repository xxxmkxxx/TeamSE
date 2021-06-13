var countComments = 3;
var nowCountComments = 0;

$(document).ready(mainFunction());

function mainFunction() {
    var game;

    getGameByName(getNameGame()).done(function (data) {
        game = $.parseJSON(data);

        dbListner(game[0]['game_id']);

        viewMoreComments(game[0]['game_id']);
    });
}
//Функция для получения массива всех комментраиев
function getAllComments(gameId) {
    return $.ajax({
        url: '../php/get_comments.php',
        type: 'POST',
        data: {gameId : gameId}
    });
}
//Функция для отображения части комментариев
function viewAllComments(comments, countComments) {
    $("#review_block2").empty();

    if(comments.length != 0) {
        for (let i = 0; i < comments.length; i++) {
            if(i < countComments) {
                if(i == comments.length - 1) {
                    $("#button_show_more").remove();
                }
                getUserById(comments[i]['id_user']).done(function (data) {
                    var user = $.parseJSON(data);

                    viewComment(comments[i], i + 1, user[0]);
                });
            }
        }
    }
}
//Функция отображения одного комментария
function viewComment(comment, number, user) {
    var commentDiv = $('<div>', {
        'class': 'comment',
        'id': number
    });

    var div_author_data = $('<div>', {
        'class': 'author_data'
    });

    var div_comment_text = $('<div>', {
        'class': 'comment_text'
    }).text(comment['comment_text']);

    var span_author_icon = $('<span>', {
        'class': 'author_icon',
        'id': 'author_icon'
    });

    var span_author_name = $('<span>', {
        'class': 'author_name',
    }).text(user['login']);

    var img = $('<img>', {
        'src': user['user_icon']
    });

    span_author_icon.append(img);
    div_author_data.append(span_author_icon);
    div_author_data.append(span_author_name);
    commentDiv.append(div_author_data);
    commentDiv.append(div_comment_text);

    $('#review_block2').append(commentDiv);
}
//Функция отображения больше комментариев
function viewMoreComments() {
    $("#button_show_more").click(function (obj) {
        obj.preventDefault();

        $("#review_block2").empty();
        countComments += 3;

        getGameByName(getNameGame()).done(function (data) {
            var game = $.parseJSON(data);

            getAllComments(game[0]['game_id']).done(function (data) {
                var comments = $.parseJSON(data);

                viewAllComments(comments, countComments);
            });
        });
    });
}
//Функция получения количества комментариев в бд
function getCountComments(gameId) {
    return $.ajax({
        url: '../php/get_count_comments_to_game.php',
        type: 'POST',
        data: {gameId : gameId}
    });
}
//Слушатель добавления комментария в бд
function dbListner(gameId) {
    setInterval(() => {
        getCountComments(gameId).done(function (data) {
            var count = $.parseJSON(data);

            if(count[0]['count'] != nowCountComments) {
                getAllComments(gameId).done(function (data) {
                    var comments = $.parseJSON(data);

                    viewAllComments(comments, countComments);
                });

                nowCountComments = count[0]['count'];
            }
        });
    }, 1200);
}