insert into users_roles(id_users_roles, users_role)
values (1,'Модератор');
insert into users_roles(id_users_roles, users_role)
values (2,'Обычный');

insert into users(id_user, login, password, email, id_users_roles, user_icon, user_description)
values (1, 'abc', 12345, 'xyz@gmail.com', 2, 'dsfhnjs', 'ahljsafsah');
insert into users(id_user, login, password, email, id_users_roles, user_icon, user_description)
values (2, 'def', 98765, 'abc@gmail.com', 2, 'sfdgerh', 'sdfggdfsgsdf');
insert into users(id_user, login, password, email, id_users_roles, user_icon, user_description)
values (3, 'xyz', 45056, 'def@gmail.com', 2, 'dgfdgfd', 'ljadfjhkgfdh');
insert into users(id_user, login, password, email, id_users_roles, user_icon, user_description)
values (4, 'test', '$2y$10$3P8P9MC2Xv4vVIO2TwBPb.Lh6RQ4XORvOvvYfCnptg3csNNIuGJEu', 'test@mail.ru', 2, 'default.png', 'default');

insert into private_message(id_message, id_sender, id_receiver, date_time, message_text)
values (1, 1, 2, '2021-05-10 20:30:00', 'привет');
insert into private_message(id_message, id_sender, id_receiver, date_time, message_text)
values (2, 2, 1, '2021-05-10 20:30:00', 'hello');

insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (1, 1, '12345', 3, 'ищу пати для совместной прокачки', 'открытая', '---', 2);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (2, 2, '67890', 4, 'научите играть кто-нибудь пж', 'открытая', '---', 1);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (3, 3, 'abcde', 3, 'ищу людей поиграть по фану', 'открытая', '---', 4);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (4, 4, 'fghij', 5, 'ищу с кем поиграть в сборку с модами, мне 11', 'закрытая', '---', 3);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (5, 5, 'klmno', 4, 'ищу адекватных людей, шарящих в игре', 'закрытая', '---', 6);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (6, 6, 'pqrst', 2, 'ищу человека поиграть на 5 лвлах', 'открытая', '---', 5);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (7, 7, 'uvwxy', 2, 'ищу саппорта', 'закрытая', '---', 9);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (8, 8, 'z1234', 5, 'начал играть недавно. буду рад если поможете разобраться', 'открытая', '---', 7);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (9, 9, '56789', 3, 'пошлите на арену. играю хорошо', 'закрытая', '---', 8);
insert into party(id_party, id_game, party_password, gamers_amount, party_description, privacy, party_icon, party_creator)
values (10, 10, '0abcd', 4, 'ищу людей для ограбления казино', 'закрытая', '---', 1);

insert into party_members(party_id, members_party_id, party_member_role, nickname)
values (1, 2, 'обычный', 'kdjsalf');
insert into party_members(party_id, members_party_id, party_member_role, nickname)
values (1, 1, 'создатель', 'kdjsalf');



insert into genres(id_genre, genre)
values (1, 'MMORPG');
insert into genres(id_genre, genre)
values (2, 'Шутер');
insert into genres(id_genre, genre)
values (3, 'Королевская битва');
insert into genres(id_genre, genre)
values (4, 'Песочница');
insert into genres(id_genre, genre)
values (5, 'Симулятор выживания');
insert into genres(id_genre, genre)
values (6, 'MMO');
insert into genres(id_genre, genre)
values (7, 'Симулятор');
insert into genres(id_genre, genre)
values (8, 'MOBA');
insert into genres(id_genre, genre)
values (9, 'Приключенческий боевик');

insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (1, 'WORLD OF WARCRAFT', 'Массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Всё действие происходит в Азероте, мире магии и нескончаемых приключений. Исследуйте постоянно развивающийся фантастический мир и прокачивайте персонажей. Во время своих приключений вы встретите других игроков, что обитают в Азероте. В WoW есть множество сообществ, участники которых связаны между собой крепкими узами дружбы. Дух этой игры сплачивает людей, будь то надежные товарищи, верная команда или достойные соперники. Это не просто игра... это образ жизни.', '../images/WORLD_OF_WARCRAFT.jpg', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (2, 'COUNTER STRIKE: GLOBAL OFFENSIVE (CS:GO)', 'Трёхмерный многопользовательский шутер от первого лица, в котором игроки распределяются по двум командам и сражаются друг против друга, разработанная компаниями Valve и Hidden Path Entertainment. В игре представлены две команды: террористы и спецназ, а также содержит несколько многопользовательских режимов игры: обычный и соревновательный режим (разминирование бомбы, спасение заложников), королевская битва, военные игры (гонка вооружений, уничтожение объекта, перелётные снайперы), бой насмерть, зачистка, совместный налёт, напарники и страж. В первом сценарии игроки, играющие за команду террористов, должны заложить бомбу в одной из нескольких точек закладки, а спецназ — успешно её разминировать. Во втором сценарии игрокам из команды террористов необходимо не дать противоборствующей команде спасти заложников, которых они похитили.', '../images/CSGO.jpg', 4.2);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (3, 'PLAYERUNKNOWN`S BATTLEGROUNDS (PUBG)', 'Многопользовательская онлайн-игра в жанре королевской битвы, PlayerUnknown’s Battlegrounds является экшн-игрой, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Bluehole. в которой игроки в количестве до 100 человек сражаются в «королевской битве» (Battle Royale), по типу крупномасштабной «last man standing» схватки в deathmatch режиме, где игроки воюют между собой, чтобы стать последним выжившим. Игроки могут выбирать, как войти в матч: в одиночку, в паре, в трио или отрядом из четырёх человек. В любом случае, последний человек или команда, оставшаяся в живых, выигрывает матч.', '../images/PLAYERUNKNOWNS_BATTLEGROUNDS_(PUBG).png', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (4, 'MINECRAFT', 'Инди-игра в жанре песочницы с элементами выживания и открытым миром. По стилю, мир игры полностью состоит из блоков (ландшафт, предметы, мобы, игрок), и для текстурирования используются текстуры с низким разрешением. Построй, всё что хочешь, из блоков в режиме «творчество», или развивайся в режиме «выживание», или выбери режим «хардкор» и тогда, после твоей смерти, данные о персонаже стираются.', '../images/MINECRAFT.jpg', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (5, 'RUST', 'Компьютерная игра в жанре симулятора выживания, была создана британской студией Facepunch. Как и в других многопользовательских играх в ней присутствуют игроки, к сожалению для вас, они могут найти вас, убить вас и забрать ваши вещи, к счастью для вас, вы можете убить их и забрать их вещи. Или же вы можете объединиться и помочь друг другу в выживании.', '../images/RUST.png', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (6, 'WORLD OF TANKS', 'Культовая ММО-игра о бронетехнике, покорившая миллионы игроков по всему миру. Разнообразие игровых карт, исторически достоверные машины, реалистичный геймплей — присоединяйтесь к армии танкистов и окунитесь в атмосферу легендарных сражений.', '../images/WORLD_OF_TANKS.png', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (7, 'DOTA 2', 'Компьютерная многопользовательская командная игра в жанре multiplayer online battle arena, разработанная корпорацией Valve. Каждый день миллионы игроков по всему миру вступают в командную битву 5 на 5 в роли одного из более чем сотни героев. Dota — глубочайшая многопользовательская стратегия всех времён, в которой всегда найдётся место новой стратегии или тактике. Начинайте защищать своего Древнего уже сейчас.', '../images/DOTA2.jpg', 5);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (8, 'LEAGUE OF LEGENDS', 'League of Legends – это стратегическая кооперативная игра, разработанная и выпущенная компанией Riot Games, в которой две команды из пяти могущественных чемпионов сражаются друг с другом, пытаясь уничтожить вражескую базу. Выбирайте персонажа из более чем 140 чемпионов, создавайте эпические моменты, зарабатывайте убийства и сносите башни на пути к победе.', '../images/LEAGUE_OF_LEGENDS.jpg', 4);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (9, 'FORTNITE', 'Кооперативная песочница на выживание, разработанная американской компанией Epic Games. Основными механиками которой являются исследование, сбор ресурсов, строительство укрепленных зданий и борьба с волнами наступающих зомби. Строительство является основной механикой, при этом в игре «уйма лута». Fortnite: Battle Royale — соревновательный режим в жанре королевской битвы, в котором 100 игроков должны сражаться друг с другом, пока в живых не останется только один.', '../images/FORTNITE.png', 3);
insert into game(id_game, game_name, game_description, game_icon_link, popularity)
values (10, 'GRAND THEFT AUTO (GTA5)', 'Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Объединяйтесь в команду, станьте грозой Лос-Сантоса, покупайте машины, лодки, квартиры, дома, участвуйте в гонках на любом транспорте, и по любым трассам, играйте в перестрелки и противоборства, выполняйте ограбления, или просто бегайте от полиции, это и многое другое в GTA Online.', '../images/GRAND_THEFT_AUTO_(GTA5).png', 5);

insert into games_genres (game_id, genre_id)
	values (1, 1);
insert into games_genres (game_id, genre_id)
	values (2, 2);
insert into games_genres (game_id, genre_id)
	values (3, 3);
insert into games_genres (game_id, genre_id)
	values (3, 2);
insert into games_genres (game_id, genre_id)
	values (4, 4);
insert into games_genres (game_id, genre_id)
	values (5, 5);
insert into games_genres (game_id, genre_id)
	values (5, 2);
insert into games_genres (game_id, genre_id)
	values (6, 6);
insert into games_genres (game_id, genre_id)
	values (6, 7);
insert into games_genres (game_id, genre_id)
	values (7, 8);
insert into games_genres (game_id, genre_id)
	values (8, 8);
insert into games_genres (game_id, genre_id)
	values (9, 3);
insert into games_genres (game_id, genre_id)
	values (9, 5);
insert into games_genres (game_id, genre_id)
	values (10, 9);

insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (1, 1, 1, 'Любая игра, в которой есть Дун Морог, заслуживает 10 баллов', '2021-05-10 20:30:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (2, 1, 2, 'Поиграл на оффе, после 3.1.3, боже что сделали с игрой? Повальный автолевелинг, автоизучение скилов, у шмоток впринципе можно было оставить 1 параметр "КГУТОСТЬ!!!" потому что они теперь кардинально между собой не отличаются, и невозможно кардинально перекачать шмотом персонажа, потому что статы шмота теперь формируются динамически при выпаде, и он всегда будет чуть-чуть лучше чем то что на тебе одето, короче превратили мою уютную ВоВку в какой - то скайфордж для имбецилов((', '2021-05-12 10:50:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (3, 1, 3, 'Тот момент когда самое лучшее становится как его конкуренты. Компания уже прямо говорит что им нужны бабки а не люди и не мнение. рест и пис близ.', '2021-05-13 23:10:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (4, 2, 1, 'Отзывы никто не читает, поэтому скажу, что я гей', '2021-04-15 19:35:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (5, 2, 2, 'Я помню чудное мгновенье
Цзшка, Молотов и флешка
Тащить я должен на длине,
Но тут выходит враг ко мне.
А я мой друг не растерялся,
Мой верный Молотов взорвался,
Врагам на зло в коробе той.
Но вот и Молотов потух,
И что же делать милый друг ?
Пора милок достать цзшку,
А с ней и флешку.
И вот я флеш кидаю в них,
Враг мой ослеп и тут же сник.
А я к ним мчуся как стрела,
В руке есть дрожь и нет скила.
Но я отнюдь не забоялся,
Я прям в коробу к ним ворвался,
Не дожидаясь тиму с дна,
Я сделал минус,
Потом два.
Потом еще, еще, еще !!!
И вот он эйс мой долгожданный,
Но тут очнулся я от сна.
И вижу счет 16:2.', '2021-04-19 13:11:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (6, 2, 3, 'Игра хорошая, не советую.', '2021-04-28 18:18:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (7, 4, 1, 'ИГРА ГАВНОО, МЕНЯ ЗАГРИФИРИЛИ.', '2021-04-02 14:56:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (8, 4, 2, 'Игра по сути хорошая, но довольно быстро наводит скуку. Есть огромный плюс в виде большого количества модов, которые вносят разнообразия в игровой процесс. В онлайне у нее полно неразумных людей, что сильно отталкивает от игры (хотя это везде так).', '2021-04-09 16:44:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (9, 4, 3, 'Майнкрафт это моя жизнь (с)', '2021-04-17 10:32:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (10, 7, 1, 'Лучшая игра для нервного срыва, рекомендую.', '2021-03-30 02:39:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (11, 7, 2, 'Welcome to the club buddy! ♂
Entrance fee to the club 300 bucks. ♂
Gaben wishes you a happy fistiпg! ♂', '2021-04-01 12:52:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (12, 7, 3, 'Написано, что игра бесплатная, но она стоила мне жизни.', '2021-04-01 16:34:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (13, 8, 1, 'Нерфы персонажей из-за про сцены, плохой реворк предметов. Если вы хотите поиграть в Лигу Ваншотов, тогда это игра для вас. Недавно Рито в очередной раз ослабили Азира, самого слабого чемпиона в лоле по вр. И этот чемпион заслуживает нерф.', '2021-04-12 19:44:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (14, 8, 2, 'Играла в лигу пол года на RU. Даже не знаю с чего начать, RU сервер сборище неадекватных, очень злых людей. Буквально в каждой катке вас обосрет и ваша тима и враги. Учиться играть на персонажах которые вам нравятся вам просто не дадут, против вас будет рыло с миллионами очков( ибо подбора игроков просто нет) вас убьет каждый кто сможет дотянуться и ваша тема и враги захейтят вас в чате, потому что на RU если не унизишь в чате соперника то победа и не победа вовсе. Если вы подумали создать смурфа и поучиться поиграть среди новичков, то нет вас встретит тот же чел с миллионом очков только на смурфе и обосрет ещё раз. Стоит ли говорить, что новичкам на RU делать просто нечего, сама сталкивалась с тем что будучи новичком меня кидало с челами 400+лвл. Баны в игре просто бесполезны, за все время игры только 2 раза мне приходило уведомление что чела на которого я кинула репорт забанили. Игра зайдёт только тем у кого стальные нервы и ноль эмоций , иначе я не знаю как можно вывезти все то дерьмо что в ней происходит.', '2021-04-17 23:56:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (15, 10, 1, 'Игра – играй и отдыхай, свобода действий.', '2021-04-25 01:14:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (16, 10, 2, 'Сюжет потрясающий, при первом прохождении затягивает. Онлайн был неплох, каскадерские гонки, ограбления вообще супер, но превращения игры в saints row играть стало невозможно, летающие машины и мотоциклы с ракетами, каждый школьник на опрессоре наровит тебя взорвать, пока ты пытаешься заработать на машину из последнего обновления. До обновлений с опрессором мк2 поставил бы 10 /10, сейчас в онлайн нормально играть невозможно, поэтому 4/10', '2021-04-26 04:18:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (17, 10, 3, '10 сбитых оленей из 10', '2021-04-30 10:50:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (18, 9, 1, 'ФОРТННННННАААААЙТ!!!11!11!', '2021-05-03 15:20:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (19, 9, 2, 'Игра топ, скины топ, всем советую, играл пять лет со 2 сезона и только один читер. Кто то скажет что фортнайт портит игровую индустрию но будет не прав ведь сколько людей играет в неё и причём не только дети!!! Ставлю твёрдую 10', '2021-05-09 19:40:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (20, 9, 3, 'К большому сожалению игра реально упала во всех смыслах. И Комьюнити игры стала на много токсичней(', '2021-05-12 03:10:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (21, 5, 1, 'Довольно тупой крафт. Нет возможности 100% защиты жилища, пусть даже и "за дорого". Очень "дорого" обходится поддержание жилища в относительно "безопасном" состоянии. И это учитывая, что к тебе могут прийти "друзья" с взрывчаткой, когда тебя вообще нет в игре и почистить под ноль всё твоё "богатство". (Про всякие там мины и турели не говорим, т.к. это всё нейтрализуется доступными игровыми элементами). Да и вообще сомнительной "идеологии" игра, где человеческое мясо "не очень вкусное" и "сушит во рту"...', '2021-04-04 09:59:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (22, 5, 3, '2021 год. На игру никто не забил, она развивается сильнее, чем в 2016.', '2021-04-28 15:04:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (23, 6, 1, 'Сделайте уже ограничение на 2 арты, да и вообще выведете её нахер. 10 поджогов когда снаряд упал в 5 метрах от танка из 10', '2021-04-10 12:54:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (24, 6, 2, 'Симулятор ожидания, берешь птшку, садишься в куст и ждешь. 10 фугасных снарядов из 10', '2021-04-17 16:00:00');
insert into game_comments(id_comment, id_game, id_user, comment_text, date_time)
	values (25, 6, 3, 'Играю с 2016 года, в целом игра интересная, много разнообразной техники, красивая графика, звуковые эффекты, можно играть без доната (правда будете дольше фармить валюту). Из минусов это то, что когда ты открываешь новый танк он даётся в стоковой комплектации, т.е. неиграбельной, а чтобы вывести его в топ нужно пострадать несколько часов. Также очень раздражает артиллерия, из-за которой играть на медленной и бронированной технике некомфортно. И, наконец, самый жирный минус — аудитория. Индивиды, играющие сотни, тысячи часов, но до сих пор не научившиеся играть и обвиняющие в своей криворукости всех, но только не себя. Было очень весело читать их отзывы ниже)', '2021-05-04 00:46:00');