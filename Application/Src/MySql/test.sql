insert into UsersRoles(id_UsersRoles, UsersRole)
values (1,'Модератор');
insert into UsersRoles(id_UsersRoles, UsersRole)
values (2,'Обычный');

insert into Users(id_user, Login, Password, Email, id_UsersRoles, UserIcon, UserDescription)
values (1, 'abc', 12345, 'xyz@gmail.com', 2, 'dsfhnjs', 'ahljsafsah');
insert into Users(id_user, Login, Password, Email, id_UsersRoles, UserIcon, UserDescription)
values (2, 'def', 98765, 'abc@gmail.com', 2, 'sfdgerh', 'sdfggdfsgsdf');

insert into PrivateMessage(id_message, id_sender, id_receiver, Date_Time, MessageText)
values (1, 1, 2, '2021-05-10 20:30:00', 'привет');
insert into PrivateMessage(id_message, id_sender, id_receiver, Date_Time, MessageText)
values (2, 2, 1, '2021-05-10 20:30:00', 'hello');

insert into Genres(id_genre, Genre)
values (1, 'moba');
insert into Genres(id_genre, Genre)
values (2, 'шутер');

insert into Game(id_game, GameName, id_genre, GameDescription, GameIconLink, Popularity)
values (1, 'dota2', 1, 'kljflk', 'dskjfhns', 4);
insert into Game(id_game, GameName, id_genre, GameDescription, GameIconLink, Popularity)
values (2, 'cs go', 2, 'fjsadfhjd', 'sjaoahnfn', 4.2);

insert into GameComments(id_comment, id_game, id_user, CommentText, Date_Time)
values (1, 1, 2, 'sjdfhajf', '2021-05-10 20:30:00');
insert into GameComments(id_comment, id_game, id_user, CommentText, Date_Time)
values (1, 2, 1, 'fdhdfhhdf', '2021-05-10 20:30:00');

insert into Party(id_party, id_game, GamersAmount, PartyDescription, Privacy, PartyIcon, PartyCreator)
values (1, 1, 2, 'djsafkhsa', 'fdjksf', 'jasfksa', 1);
insert into Party(id_party, id_game, GamersAmount, PartyDescription, Privacy, PartyIcon, PartyCreator)
values (1, 2, 2, 'fxgsdgsdfg', 'jhghkuhk', 'wadsfcs', 2);

insert into PartyMembers(id_party, PartyMemberRole, id_user, Nickname)
values (1, 'обычный', 2, 'kdjsalf');
insert into PartyMembers(id_party, PartyMemberRole, id_user, Nickname)
values (1, 'создатель', 1, 'kdjsalf');

