$(document).ready(mainFunction());

function mainFunction() {
    var game;
    var comments;

    getGameByName(getNameGame()).done(function (data) {
        game = $.parseJSON(data);

        getAllComments(game[0]['game_id']).done(function (data) {
            comments = $.parseJSON(data);

            viewAllComments(comments, 3);
        });
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
    if(comments.length != 0) {
        for (let i = 0; i < comments.length; i++) {
            if(i <= countComments) {
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