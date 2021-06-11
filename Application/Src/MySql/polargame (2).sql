-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 11 2021 г., 14:36
-- Версия сервера: 10.3.25-MariaDB-0+deb10u1
-- Версия PHP: 7.3.27-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `polargame`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Game`
--

CREATE TABLE `Game` (
  `id_game` int(11) NOT NULL,
  `GameName` text DEFAULT NULL,
  `GameDescription` text DEFAULT NULL,
  `GameIconLink` text DEFAULT NULL,
  `Popularity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `Game`
--

INSERT INTO `Game` (`id_game`, `GameName`, `GameDescription`, `GameIconLink`, `Popularity`) VALUES
(1, 'WORLD OF WARCRAFT', 'Массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Всё действие происходит в Азероте, мире магии и нескончаемых приключений. Исследуйте постоянно развивающийся фантастический мир и прокачивайте персонажей. Во время своих приключений вы встретите других игроков, что обитают в Азероте. В WoW есть множество сообществ, участники которых связаны между собой крепкими узами дружбы. Дух этой игры сплачивает людей, будь то надежные товарищи, верная команда или достойные соперники. Это не просто игра... это образ жизни.', '../images/WORLD_OF_WARCRAFT.jpg', 3),
(2, 'COUNTER STRIKE: GLOBAL OFFENSIVE (CS:GO)', 'Трёхмерный многопользовательский шутер от первого лица, в котором игроки распределяются по двум командам и сражаются друг против друга, разработанная компаниями Valve и Hidden Path Entertainment. В игре представлены две команды: террористы и спецназ, а также содержит несколько многопользовательских режимов игры: обычный и соревновательный режим (разминирование бомбы, спасение заложников), королевская битва, военные игры (гонка вооружений, уничтожение объекта, перелётные снайперы), бой насмерть, зачистка, совместный налёт, напарники и страж. В первом сценарии игроки, играющие за команду террористов, должны заложить бомбу в одной из нескольких точек закладки, а спецназ — успешно её разминировать. Во втором сценарии игрокам из команды террористов необходимо не дать противоборствующей команде спасти заложников, которых они похитили.', '../images/CSGO.jpg', 3),
(3, 'PLAYERUNKNOWN`S BATTLEGROUNDS (PUBG)', 'Многопользовательская онлайн-игра в жанре королевской битвы, PlayerUnknown’s Battlegrounds является экшн-игрой, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Bluehole. в которой игроки в количестве до 100 человек сражаются в «королевской битве» (Battle Royale), по типу крупномасштабной «last man standing» схватки в deathmatch режиме, где игроки воюют между собой, чтобы стать последним выжившим. Игроки могут выбирать, как войти в матч: в одиночку, в паре, в трио или отрядом из четырёх человек. В любом случае, последний человек или команда, оставшаяся в живых, выигрывает матч.', '../images/PLAYERUNKNOWNS_BATTLEGROUNDS_(PUBG).png', 4),
(4, 'MINECRAFT', 'Инди-игра в жанре песочницы с элементами выживания и открытым миром. По стилю, мир игры полностью состоит из блоков (ландшафт, предметы, мобы, игрок), и для текстурирования используются текстуры с низким разрешением. Построй, всё что хочешь, из блоков в режиме «творчество», или развивайся в режиме «выживание», или выбери режим «хардкор» и тогда, после твоей смерти, данные о персонаже стираются.', '../images/MINECRAFT.jpg', 4),
(5, 'RUST', 'Компьютерная игра в жанре симулятора выживания, была создана британской студией Facepunch. Как и в других многопользовательских играх в ней присутствуют игроки, к сожалению для вас, они могут найти вас, убить вас и забрать ваши вещи, к счастью для вас, вы можете убить их и забрать их вещи. Или же вы можете объединиться и помочь друг другу в выживании.', '../images/RUST.png', 4),
(6, 'WORLD OF TANKS', 'Культовая ММО-игра о бронетехнике, покорившая миллионы игроков по всему миру. Разнообразие игровых карт, исторически достоверные машины, реалистичный геймплей — присоединяйтесь к армии танкистов и окунитесь в атмосферу легендарных сражений.', '../images/WORLD_OF_TANKS.png', 3),
(7, 'DOTA 2', 'Компьютерная многопользовательская командная игра в жанре multiplayer online battle arena, разработанная корпорацией Valve. Каждый день миллионы игроков по всему миру вступают в командную битву 5 на 5 в роли одного из более чем сотни героев. Dota — глубочайшая многопользовательская стратегия всех времён, в которой всегда найдётся место новой стратегии или тактике. Начинайте защищать своего Древнего уже сейчас.', '../images/DOTA2.jpg', 5),
(8, 'LEAGUE OF LEGENDS', 'League of Legends – это стратегическая кооперативная игра, разработанная и выпущенная компанией Riot Games, в которой две команды из пяти могущественных чемпионов сражаются друг с другом, пытаясь уничтожить вражескую базу. Выбирайте персонажа из более чем 140 чемпионов, создавайте эпические моменты, зарабатывайте убийства и сносите башни на пути к победе.', '../images/LEAGUE_OF_LEGENDS.jpg', 4),
(9, 'FORTNITE', 'Кооперативная песочница на выживание, разработанная американской компанией Epic Games. Основными механиками которой являются исследование, сбор ресурсов, строительство укрепленных зданий и борьба с волнами наступающих зомби. Строительство является основной механикой, при этом в игре «уйма лута». Fortnite: Battle Royale — соревновательный режим в жанре королевской битвы, в котором 100 игроков должны сражаться друг с другом, пока в живых не останется только один.', '../images/FORTNITE.png', 3),
(10, 'GRAND THEFT AUTO (GTA5)', 'Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Объединяйтесь в команду, станьте грозой Лос-Сантоса, покупайте машины, лодки, квартиры, дома, участвуйте в гонках на любом транспорте, и по любым трассам, играйте в перестрелки и противоборства, выполняйте ограбления, или просто бегайте от полиции, это и многое другое в GTA Online.', '../images/GRAND_THEFT_AUTO_(GTA5).png', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `GameComments`
--

CREATE TABLE `GameComments` (
  `id_comment` int(11) NOT NULL,
  `id_game` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `CommentText` text DEFAULT NULL,
  `Date_Time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `GameComments`
--

INSERT INTO `GameComments` (`id_comment`, `id_game`, `id_user`, `CommentText`, `Date_Time`) VALUES
(1, 1, 1, 'Любая игра, в которой есть Дун Морог, заслуживает 10 баллов', '2021-05-10 20:30:00'),
(2, 1, 2, 'Поиграл на оффе, после 3.1.3, боже что сделали с игрой? Повальный автолевелинг, автоизучение скилов, у шмоток впринципе можно было оставить 1 параметр \"КГУТОСТЬ!!!\" потому что они теперь кардинально между собой не отличаются, и невозможно кардинально перекачать шмотом персонажа, потому что статы шмота теперь формируются динамически при выпаде, и он всегда будет чуть-чуть лучше чем то что на тебе одето, короче превратили мою уютную ВоВку в какой - то скайфордж для имбецилов((', '2021-05-12 10:50:00'),
(3, 1, 3, 'Тот момент когда самое лучшее становится как его конкуренты. Компания уже прямо говорит что им нужны бабки а не люди и не мнение. рест и пис близ.', '2021-05-13 23:10:00'),
(4, 2, 1, 'Отзывы никто не читает, поэтому скажу, что я гей', '2021-04-15 19:35:00'),
(5, 2, 2, 'Я помню чудное мгновенье\r\nЦзшка, Молотов и флешка\r\nТащить я должен на длине,\r\nНо тут выходит враг ко мне.\r\nА я мой друг не растерялся,\r\nМой верный Молотов взорвался,\r\nВрагам на зло в коробе той.\r\nНо вот и Молотов потух,\r\nИ что же делать милый друг ?\r\nПора милок достать цзшку,\r\nА с ней и флешку.\r\nИ вот я флеш кидаю в них,\r\nВраг мой ослеп и тут же сник.\r\nА я к ним мчуся как стрела,\r\nВ руке есть дрожь и нет скила.\r\nНо я отнюдь не забоялся,\r\nЯ прям в коробу к ним ворвался,\r\nНе дожидаясь тиму с дна,\r\nЯ сделал минус,\r\nПотом два.\r\nПотом еще, еще, еще !!!\r\nИ вот он эйс мой долгожданный,\r\nНо тут очнулся я от сна.\r\nИ вижу счет 16:2.', '2021-04-19 13:11:00'),
(6, 2, 3, 'Игра хорошая, не советую.', '2021-04-28 18:18:00'),
(7, 4, 1, 'ИГРА ГАВНОО, МЕНЯ ЗАГРИФИРИЛИ.', '2021-04-02 14:56:00'),
(8, 4, 2, 'Игра по сути хорошая, но довольно быстро наводит скуку. Есть огромный плюс в виде большого количества модов, которые вносят разнообразия в игровой процесс. В онлайне у нее полно неразумных людей, что сильно отталкивает от игры (хотя это везде так).', '2021-04-09 16:44:00'),
(9, 4, 3, 'Майнкрафт это моя жизнь (с)', '2021-04-17 10:32:00'),
(10, 7, 1, 'Лучшая игра для нервного срыва, рекомендую.', '2021-03-30 02:39:00'),
(11, 7, 2, 'Welcome to the club buddy! ♂\r\nEntrance fee to the club 300 bucks. ♂\r\nGaben wishes you a happy fistiпg! ♂', '2021-04-01 12:52:00'),
(12, 7, 3, 'Написано, что игра бесплатная, но она стоила мне жизни.', '2021-04-01 16:34:00'),
(13, 8, 1, 'Нерфы персонажей из-за про сцены, плохой реворк предметов. Если вы хотите поиграть в Лигу Ваншотов, тогда это игра для вас. Недавно Рито в очередной раз ослабили Азира, самого слабого чемпиона в лоле по вр. И этот чемпион заслуживает нерф.', '2021-04-12 19:44:00'),
(14, 8, 2, 'Играла в лигу пол года на RU. Даже не знаю с чего начать, RU сервер сборище неадекватных, очень злых людей. Буквально в каждой катке вас обосрет и ваша тима и враги. Учиться играть на персонажах которые вам нравятся вам просто не дадут, против вас будет рыло с миллионами очков( ибо подбора игроков просто нет) вас убьет каждый кто сможет дотянуться и ваша тема и враги захейтят вас в чате, потому что на RU если не унизишь в чате соперника то победа и не победа вовсе. Если вы подумали создать смурфа и поучиться поиграть среди новичков, то нет вас встретит тот же чел с миллионом очков только на смурфе и обосрет ещё раз. Стоит ли говорить, что новичкам на RU делать просто нечего, сама сталкивалась с тем что будучи новичком меня кидало с челами 400+лвл. Баны в игре просто бесполезны, за все время игры только 2 раза мне приходило уведомление что чела на которого я кинула репорт забанили. Игра зайдёт только тем у кого стальные нервы и ноль эмоций , иначе я не знаю как можно вывезти все то дерьмо что в ней происходит.', '2021-04-17 23:56:00'),
(15, 10, 1, 'Игра – играй и отдыхай, свобода действий.', '2021-04-25 01:14:00'),
(16, 10, 2, 'Сюжет потрясающий, при первом прохождении затягивает. Онлайн был неплох, каскадерские гонки, ограбления вообще супер, но превращения игры в saints row играть стало невозможно, летающие машины и мотоциклы с ракетами, каждый школьник на опрессоре наровит тебя взорвать, пока ты пытаешься заработать на машину из последнего обновления. До обновлений с опрессором мк2 поставил бы 10 /10, сейчас в онлайн нормально играть невозможно, поэтому 4/10', '2021-04-26 04:18:00'),
(17, 10, 3, '10 сбитых оленей из 10', '2021-04-30 10:50:00'),
(18, 9, 1, 'ФОРТННННННАААААЙТ!!!11!11!', '2021-05-03 15:20:00'),
(19, 9, 2, 'Игра топ, скины топ, всем советую, играл пять лет со 2 сезона и только один читер. Кто то скажет что фортнайт портит игровую индустрию но будет не прав ведь сколько людей играет в неё и причём не только дети!!! Ставлю твёрдую 10', '2021-05-09 19:40:00'),
(20, 9, 3, 'К большому сожалению игра реально упала во всех смыслах. И Комьюнити игры стала на много токсичней(', '2021-05-12 03:10:00'),
(21, 5, 1, 'Довольно тупой крафт. Нет возможности 100% защиты жилища, пусть даже и \"за дорого\". Очень \"дорого\" обходится поддержание жилища в относительно \"безопасном\" состоянии. И это учитывая, что к тебе могут прийти \"друзья\" с взрывчаткой, когда тебя вообще нет в игре и почистить под ноль всё твоё \"богатство\". (Про всякие там мины и турели не говорим, т.к. это всё нейтрализуется доступными игровыми элементами). Да и вообще сомнительной \"идеологии\" игра, где человеческое мясо \"не очень вкусное\" и \"сушит во рту\"...', '2021-04-04 09:59:00'),
(22, 5, 3, '2021 год. На игру никто не забил, она развивается сильнее, чем в 2016.', '2021-04-28 15:04:00'),
(23, 6, 1, 'Сделайте уже ограничение на 2 арты, да и вообще выведете её нахер. 10 поджогов когда снаряд упал в 5 метрах от танка из 10', '2021-04-10 12:54:00'),
(24, 6, 2, 'Симулятор ожидания, берешь птшку, садишься в куст и ждешь. 10 фугасных снарядов из 10', '2021-04-17 16:00:00'),
(25, 6, 3, 'Играю с 2016 года, в целом игра интересная, много разнообразной техники, красивая графика, звуковые эффекты, можно играть без доната (правда будете дольше фармить валюту). Из минусов это то, что когда ты открываешь новый танк он даётся в стоковой комплектации, т.е. неиграбельной, а чтобы вывести его в топ нужно пострадать несколько часов. Также очень раздражает артиллерия, из-за которой играть на медленной и бронированной технике некомфортно. И, наконец, самый жирный минус — аудитория. Индивиды, играющие сотни, тысячи часов, но до сих пор не научившиеся играть и обвиняющие в своей криворукости всех, но только не себя. Было очень весело читать их отзывы ниже)', '2021-05-04 00:46:00');

-- --------------------------------------------------------

--
-- Структура таблицы `games_genres`
--

CREATE TABLE `games_genres` (
  `game_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `games_genres`
--

INSERT INTO `games_genres` (`game_id`, `genre_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 2),
(4, 4),
(5, 5),
(5, 2),
(6, 6),
(6, 7),
(7, 8),
(8, 8),
(9, 3),
(9, 5),
(10, 9);

-- --------------------------------------------------------

--
-- Структура таблицы `Genres`
--

CREATE TABLE `Genres` (
  `id_genre` int(11) NOT NULL,
  `Genre` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `Genres`
--

INSERT INTO `Genres` (`id_genre`, `Genre`) VALUES
(1, 'MMORPG'),
(2, 'Шутер'),
(3, 'Королевская битва'),
(4, 'Песочница'),
(5, 'Симулятор выживания'),
(6, 'MMO'),
(7, 'Симулятор'),
(8, 'MOBA'),
(9, 'Приключенческий боевик');

-- --------------------------------------------------------

--
-- Структура таблицы `Party`
--

CREATE TABLE `Party` (
  `id_party` int(11) NOT NULL,
  `id_game` int(11) DEFAULT NULL,
  `PartyPassword` text DEFAULT NULL,
  `GamersAmount` int(11) DEFAULT NULL,
  `PartyDescription` text DEFAULT NULL,
  `Privacy` text DEFAULT NULL,
  `PartyIcon` text DEFAULT NULL,
  `PartyCreator` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `Party`
--

INSERT INTO `Party` (`id_party`, `id_game`, `PartyPassword`, `GamersAmount`, `PartyDescription`, `Privacy`, `PartyIcon`, `PartyCreator`) VALUES
(1, 1, '12345', 3, 'ищу пати для совместной прокачки', 'открытая', '---', 2),
(2, 2, '67890', 4, 'научите играть кто-нибудь пж', 'открытая', '---', 1),
(3, 3, 'abcde', 3, 'ищу людей поиграть по фану', 'открытая', '---', 4),
(4, 4, 'fghig', 5, 'ищу с кем поиграть в сборку с модами, мне 11', 'закрытая', '---', 3),
(5, 5, 'klmno', 4, 'ищу адекватных людей, шарящих в игре', 'закрытая', '---', 6),
(6, 6, 'pqrst', 2, 'ищу человека поиграть на 5 лвлах', 'открытая', '---', 5),
(7, 7, 'uvwxy', 2, 'ищу саппорта', 'закрытая', '---', 9),
(8, 8, 'z1234', 5, 'начал играть недавно. буду рад если поможете разобраться', 'открытая', '---', 7),
(9, 9, '56789', 3, 'пошлите на арену. играю хорошо', 'закрытая', '---', 8),
(10, 10, '0abcd', 4, 'ищу людей для ограбления казино', 'закрытая', '---', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `party_members`
--

CREATE TABLE `party_members` (
  `party_id` int(11) NOT NULL,
  `members_party_id` int(11) NOT NULL,
  `PartyMemberRole` text DEFAULT NULL,
  `Nickname` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `party_members`
--

INSERT INTO `party_members` (`party_id`, `members_party_id`, `PartyMemberRole`, `Nickname`) VALUES
(1, 2, 'обычный', 'kdjsalf'),
(1, 1, 'создатель', 'kdjsalf');

-- --------------------------------------------------------

--
-- Структура таблицы `PrivateMessage`
--

CREATE TABLE `PrivateMessage` (
  `id_message` int(11) NOT NULL,
  `id_sender` int(11) DEFAULT NULL,
  `id_receiver` int(11) DEFAULT NULL,
  `Date_Time` datetime DEFAULT NULL,
  `MessageText` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `PrivateMessage`
--

INSERT INTO `PrivateMessage` (`id_message`, `id_sender`, `id_receiver`, `Date_Time`, `MessageText`) VALUES
(1, 1, 2, '2021-05-10 20:30:00', 'привет'),
(2, 2, 1, '2021-05-10 20:30:00', 'hello');

-- --------------------------------------------------------

--
-- Структура таблицы `Team`
--

CREATE TABLE `Team` (
  `id_team` int(11) NOT NULL,
  `TeamName` text DEFAULT NULL,
  `id_game` int(11) DEFAULT NULL,
  `Privacy` text DEFAULT NULL,
  `Popularity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `TeamMemberRole`
--

CREATE TABLE `TeamMemberRole` (
  `id_teamMemberRole` int(11) NOT NULL,
  `TeamMemberRole` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `TeamMembers`
--

CREATE TABLE `TeamMembers` (
  `id_team` int(11) NOT NULL,
  `id_teamMemberRole` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `TeamMessage`
--

CREATE TABLE `TeamMessage` (
  `id_message` int(11) NOT NULL,
  `id_sender` int(11) DEFAULT NULL,
  `id_team` int(11) DEFAULT NULL,
  `Date_Time` datetime DEFAULT NULL,
  `MessageText` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `team_members`
--

CREATE TABLE `team_members` (
  `team_id` int(11) NOT NULL,
  `members_team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id_user` int(11) NOT NULL,
  `Login` text DEFAULT NULL,
  `Password` text DEFAULT NULL,
  `Email` text DEFAULT NULL,
  `id_UsersRoles` int(11) DEFAULT NULL,
  `UserIcon` text DEFAULT NULL,
  `UserDescription` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id_user`, `Login`, `Password`, `Email`, `id_UsersRoles`, `UserIcon`, `UserDescription`) VALUES
(1, 'abc', '12345', 'xyz@gmail.com', 2, '../images/example_pic.png', 'ahljsafsah'),
(2, 'def', '98765', 'abc@gmail.com', 2, '../images/example_pic.png', 'sdfggdfsgsdf'),
(3, 'xyz', '45056', 'def@gmail.com', 2, '../images/example_pic.png', 'ljadfjhkgfdh'),
(4, 'test', '$2y$10$3P8P9MC2Xv4vVIO2TwBPb.Lh6RQ4XORvOvvYfCnptg3csNNIuGJEu', 'test@mail.ru', 2, '../images/example_pic.png', 'default'),
(5, 'фывфыв', '$2y$10$spGXzyCOuGXqkREFkS0icudLGXo.F.Rt4H5QB8jF9x59f9/7PRJyW', 'фывфывфы', 2, '../images/example_pic.png', 'default'),
(6, 'testtt', '$2y$10$AbyBlbuAPtGZKNtU4ZfSce69GfOrHdOxBSCvHwVB9asr/CQX7ovbW', 'testtt@mail.ru', 2, 'default.png', 'default'),
(7, 'test2', '$2y$10$UsYLxe22aEctAKpChFixRu/U9sWGlwWQLiYtCXKgyAjliQs/n07vy', 'test2@mail.ru', 2, 'default.png', 'default'),
(8, 'Jess Lyrix', '$2y$10$hyf7mkKEm6x9JNI4aTfWqeOLiHUE6GMeBYwdIRr/Ok59Bq.ACBETS', 'homickijvadim012@gmail.com', 2, 'default.png', 'default'),
(9, 'jekarws', '$2y$10$JQhrCbT.4ii1vSPcvhnpaOvm4dCMmv9qhIulz1Y8Ek4ZwWoA42kWW', 'jekarws@gmail.com', 2, 'default.png', 'default');

-- --------------------------------------------------------

--
-- Структура таблицы `UsersRoles`
--

CREATE TABLE `UsersRoles` (
  `id_UsersRoles` int(11) NOT NULL,
  `UsersRole` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `UsersRoles`
--

INSERT INTO `UsersRoles` (`id_UsersRoles`, `UsersRole`) VALUES
(1, 'Модератор'),
(2, 'Обычный');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Game`
--
ALTER TABLE `Game`
  ADD PRIMARY KEY (`id_game`);

--
-- Индексы таблицы `GameComments`
--
ALTER TABLE `GameComments`
  ADD PRIMARY KEY (`id_comment`);

--
-- Индексы таблицы `games_genres`
--
ALTER TABLE `games_genres`
  ADD KEY `game_id` (`game_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Индексы таблицы `Genres`
--
ALTER TABLE `Genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Индексы таблицы `Party`
--
ALTER TABLE `Party`
  ADD PRIMARY KEY (`id_party`);

--
-- Индексы таблицы `party_members`
--
ALTER TABLE `party_members`
  ADD KEY `party_id` (`party_id`),
  ADD KEY `members_party_id` (`members_party_id`);

--
-- Индексы таблицы `PrivateMessage`
--
ALTER TABLE `PrivateMessage`
  ADD PRIMARY KEY (`id_message`);

--
-- Индексы таблицы `Team`
--
ALTER TABLE `Team`
  ADD PRIMARY KEY (`id_team`);

--
-- Индексы таблицы `TeamMemberRole`
--
ALTER TABLE `TeamMemberRole`
  ADD PRIMARY KEY (`id_teamMemberRole`);

--
-- Индексы таблицы `TeamMembers`
--
ALTER TABLE `TeamMembers`
  ADD PRIMARY KEY (`id_team`);

--
-- Индексы таблицы `TeamMessage`
--
ALTER TABLE `TeamMessage`
  ADD PRIMARY KEY (`id_message`);

--
-- Индексы таблицы `team_members`
--
ALTER TABLE `team_members`
  ADD KEY `team_id` (`team_id`),
  ADD KEY `members_team_id` (`members_team_id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id_user`);

--
-- Индексы таблицы `UsersRoles`
--
ALTER TABLE `UsersRoles`
  ADD PRIMARY KEY (`id_UsersRoles`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Game`
--
ALTER TABLE `Game`
  MODIFY `id_game` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `GameComments`
--
ALTER TABLE `GameComments`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `Genres`
--
ALTER TABLE `Genres`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `Party`
--
ALTER TABLE `Party`
  MODIFY `id_party` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `PrivateMessage`
--
ALTER TABLE `PrivateMessage`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Team`
--
ALTER TABLE `Team`
  MODIFY `id_team` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `TeamMemberRole`
--
ALTER TABLE `TeamMemberRole`
  MODIFY `id_teamMemberRole` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `TeamMembers`
--
ALTER TABLE `TeamMembers`
  MODIFY `id_team` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `UsersRoles`
--
ALTER TABLE `UsersRoles`
  MODIFY `id_UsersRoles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `games_genres`
--
ALTER TABLE `games_genres`
  ADD CONSTRAINT `games_genres_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `Game` (`id_game`),
  ADD CONSTRAINT `games_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `Genres` (`id_genre`);

--
-- Ограничения внешнего ключа таблицы `party_members`
--
ALTER TABLE `party_members`
  ADD CONSTRAINT `party_members_ibfk_1` FOREIGN KEY (`party_id`) REFERENCES `Party` (`id_party`),
  ADD CONSTRAINT `party_members_ibfk_2` FOREIGN KEY (`members_party_id`) REFERENCES `Users` (`id_user`);

--
-- Ограничения внешнего ключа таблицы `team_members`
--
ALTER TABLE `team_members`
  ADD CONSTRAINT `team_members_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `Team` (`id_team`),
  ADD CONSTRAINT `team_members_ibfk_2` FOREIGN KEY (`members_team_id`) REFERENCES `TeamMembers` (`id_team`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
