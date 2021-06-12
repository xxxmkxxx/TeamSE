-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2021 at 02:20 AM
-- Server version: 8.0.19
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polargame`
--

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `game_id` int NOT NULL,
  `game_name` text,
  `game_description` text,
  `game_icon_link` text,
  `popularity` int DEFAULT NULL
);

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`game_id`, `game_name`, `game_description`, `game_icon_link`, `popularity`) VALUES
(1, 'WORLD OF WARCRAFT', 'Массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Всё действие происходит в Азероте, мире магии и нескончаемых приключений. Исследуйте постоянно развивающийся фантастический мир и прокачивайте персонажей. Во время своих приключений вы встретите других игроков, что обитают в Азероте. В WoW есть множество сообществ, участники которых связаны между собой крепкими узами дружбы. Дух этой игры сплачивает людей, будь то надежные товарищи, верная команда или достойные соперники. Это не просто игра... это образ жизни.', '../images/WORLD_OF_WARCRAFT.jpg', 4),
(2, 'COUNTER STRIKE: GLOBAL OFFENSIVE (CS:GO)', 'Трёхмерный многопользовательский шутер от первого лица, в котором игроки распределяются по двум командам и сражаются друг против друга, разработанная компаниями Valve и Hidden Path Entertainment. В игре представлены две команды: террористы и спецназ, а также содержит несколько многопользовательских режимов игры: обычный и соревновательный режим (разминирование бомбы, спасение заложников), королевская битва, военные игры (гонка вооружений, уничтожение объекта, перелётные снайперы), бой насмерть, зачистка, совместный налёт, напарники и страж. В первом сценарии игроки, играющие за команду террористов, должны заложить бомбу в одной из нескольких точек закладки, а спецназ — успешно её разминировать. Во втором сценарии игрокам из команды террористов необходимо не дать противоборствующей команде спасти заложников, которых они похитили.', '../images/CSGO.jpg', 4),
(3, 'PLAYERUNKNOWN`S BATTLEGROUNDS (PUBG)', 'Многопользовательская онлайн-игра в жанре королевской битвы, PlayerUnknown’s Battlegrounds является экшн-игрой, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Bluehole. в которой игроки в количестве до 100 человек сражаются в «королевской битве» (Battle Royale), по типу крупномасштабной «last man standing» схватки в deathmatch режиме, где игроки воюют между собой, чтобы стать последним выжившим. Игроки могут выбирать, как войти в матч: в одиночку, в паре, в трио или отрядом из четырёх человек. В любом случае, последний человек или команда, оставшаяся в живых, выигрывает матч.', '../images/PLAYERUNKNOWNS_BATTLEGROUNDS_(PUBG).png', 4),
(4, 'MINECRAFT', 'Инди-игра в жанре песочницы с элементами выживания и открытым миром. По стилю, мир игры полностью состоит из блоков (ландшафт, предметы, мобы, игрок), и для текстурирования используются текстуры с низким разрешением. Построй, всё что хочешь, из блоков в режиме «творчество», или развивайся в режиме «выживание», или выбери режим «хардкор» и тогда, после твоей смерти, данные о персонаже стираются.', '../images/MINECRAFT.jpg', 4),
(5, 'RUST', 'Компьютерная игра в жанре симулятора выживания, была создана британской студией Facepunch. Как и в других многопользовательских играх в ней присутствуют игроки, к сожалению для вас, они могут найти вас, убить вас и забрать ваши вещи, к счастью для вас, вы можете убить их и забрать их вещи. Или же вы можете объединиться и помочь друг другу в выживании.', '../images/RUST.png', 4),
(6, 'WORLD OF TANKS', 'Культовая ММО-игра о бронетехнике, покорившая миллионы игроков по всему миру. Разнообразие игровых карт, исторически достоверные машины, реалистичный геймплей — присоединяйтесь к армии танкистов и окунитесь в атмосферу легендарных сражений.', '../images/WORLD_OF_TANKS.png', 4),
(7, 'DOTA 2', 'Компьютерная многопользовательская командная игра в жанре multiplayer online battle arena, разработанная корпорацией Valve. Каждый день миллионы игроков по всему миру вступают в командную битву 5 на 5 в роли одного из более чем сотни героев. Dota — глубочайшая многопользовательская стратегия всех времён, в которой всегда найдётся место новой стратегии или тактике. Начинайте защищать своего Древнего уже сейчас.', '../images/DOTA2.jpg', 5),
(8, 'LEAGUE OF LEGENDS', 'League of Legends – это стратегическая кооперативная игра, разработанная и выпущенная компанией Riot Games, в которой две команды из пяти могущественных чемпионов сражаются друг с другом, пытаясь уничтожить вражескую базу. Выбирайте персонажа из более чем 140 чемпионов, создавайте эпические моменты, зарабатывайте убийства и сносите башни на пути к победе.', '../images/LEAGUE_OF_LEGENDS.jpg', 4),
(9, 'FORTNITE', 'Кооперативная песочница на выживание, разработанная американской компанией Epic Games. Основными механиками которой являются исследование, сбор ресурсов, строительство укрепленных зданий и борьба с волнами наступающих зомби. Строительство является основной механикой, при этом в игре «уйма лута». Fortnite: Battle Royale — соревновательный режим в жанре королевской битвы, в котором 100 игроков должны сражаться друг с другом, пока в живых не останется только один.', '../images/FORTNITE.png', 3),
(10, 'GRAND THEFT AUTO (GTA5)', 'Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Объединяйтесь в команду, станьте грозой Лос-Сантоса, покупайте машины, лодки, квартиры, дома, участвуйте в гонках на любом транспорте, и по любым трассам, играйте в перестрелки и противоборства, выполняйте ограбления, или просто бегайте от полиции, это и многое другое в GTA Online.', '../images/GRAND_THEFT_AUTO_(GTA5).png', 5);

-- --------------------------------------------------------

--
-- Table structure for table `games_genres`
--

CREATE TABLE `games_genres` (
  `game_id` int NOT NULL,
  `genre_id` int NOT NULL
);

--
-- Dumping data for table `games_genres`
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
-- Table structure for table `game_comments`
--

CREATE TABLE `game_comments` (
  `id_comment` int NOT NULL,
  `game_id` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `comment_text` text,
  `date_time` datetime DEFAULT NULL
);

--
-- Dumping data for table `game_comments`
--

INSERT INTO `game_comments` (`id_comment`, `game_id`, `id_user`, `comment_text`, `date_time`) VALUES
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
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id_genre` int NOT NULL,
  `genre` text
);

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id_genre`, `genre`) VALUES
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
-- Table structure for table `party`
--

CREATE TABLE `party` (
  `id_party` int NOT NULL,
  `game_id` int DEFAULT NULL,
  `party_password` text,
  `gamers_amount` int DEFAULT NULL,
  `party_description` text,
  `privacy` text,
  `party_icon` text,
  `party_creator` int DEFAULT NULL
);

--
-- Dumping data for table `party`
--

INSERT INTO `party` (`id_party`, `game_id`, `party_password`, `gamers_amount`, `party_description`, `privacy`, `party_icon`, `party_creator`) VALUES
(1, 1, '12345', 3, 'ищу пати для совместной прокачки', 'открытая', '---', 2),
(2, 2, '67890', 4, 'научите играть кто-нибудь пж', 'открытая', '---', 1),
(3, 3, 'abcde', 3, 'ищу людей поиграть по фану', 'открытая', '---', 4),
(4, 4, 'fghij', 5, 'ищу с кем поиграть в сборку с модами, мне 11', 'закрытая', '---', 3),
(5, 5, 'klmno', 4, 'ищу адекватных людей, шарящих в игре', 'закрытая', '---', 6),
(6, 6, 'pqrst', 2, 'ищу человека поиграть на 5 лвлах', 'открытая', '---', 5),
(7, 7, 'uvwxy', 2, 'ищу саппорта', 'закрытая', '---', 9),
(8, 8, 'z1234', 5, 'начал играть недавно. буду рад если поможете разобраться', 'открытая', '---', 7),
(9, 9, '56789', 3, 'пошлите на арену. играю хорошо', 'закрытая', '---', 8),
(10, 10, '0abcd', 4, 'ищу людей для ограбления казино', 'закрытая', '---', 1);

-- --------------------------------------------------------

--
-- Table structure for table `party_members`
--

CREATE TABLE `party_members` (
  `party_id` int NOT NULL,
  `members_party_id` int NOT NULL,
  `party_member_role` text,
  `nickname` text
);

--
-- Dumping data for table `party_members`
--

INSERT INTO `party_members` (`party_id`, `members_party_id`, `party_member_role`, `nickname`) VALUES
(1, 2, 'обычный', 'kdjsalf'),
(1, 1, 'создатель', 'kdjsalf');

-- --------------------------------------------------------

--
-- Table structure for table `private_message`
--

CREATE TABLE `private_message` (
  `id_message` int NOT NULL,
  `id_sender` int DEFAULT NULL,
  `id_receiver` int DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `message_text` text
);

--
-- Dumping data for table `private_message`
--

INSERT INTO `private_message` (`id_message`, `id_sender`, `id_receiver`, `date_time`, `message_text`) VALUES
(1, 1, 2, '2021-05-10 20:30:00', 'привет'),
(2, 2, 1, '2021-05-10 20:30:00', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int NOT NULL,
  `login` text,
  `password` text,
  `email` text,
  `id_users_roles` int DEFAULT NULL,
  `user_icon` text,
  `user_description` text
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `login`, `password`, `email`, `id_users_roles`, `user_icon`, `user_description`) VALUES
(1, 'abc', '12345', 'xyz@gmail.com', 2, '../images/example_pic.png', 'ahljsafsah'),
(2, 'def', '98765', 'abc@gmail.com', 2, '../images/example_pic.png', 'sdfggdfsgsdf'),
(3, 'xyz', '45056', 'def@gmail.com', 2, '../images/example_pic.png', 'ljadfjhkgfdh'),
(4, 'test', '$2y$10$3P8P9MC2Xv4vVIO2TwBPb.Lh6RQ4XORvOvvYfCnptg3csNNIuGJEu', 'test@mail.ru', 2, '../images/example_pic.png', 'default'),
(5, 'jekarws', '$2y$10$DKCZjZCMK4F.NmMhfb5KZ.mrczJUDJOHgE4pVkzvEGKd7/1kY6zBS', 'jenialeontiev@yandex.ru', 2, '../images/example_pic.png', 'default'),
(6, 'asdf', '$2y$10$QRe9Ffmu/pPo0xohAFdCKePPlI1CJgT4mIOH7y3lZhOsLfSNSFU22', 'asdf', 2, '../images/example_pic.png', 'default');

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `id_users_roles` int NOT NULL,
  `users_role` text
);

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`id_users_roles`, `users_role`) VALUES
(1, 'Модератор'),
(2, 'Обычный');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `games_genres`
--
ALTER TABLE `games_genres`
  ADD KEY `game_id` (`game_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `game_comments`
--
ALTER TABLE `game_comments`
  ADD PRIMARY KEY (`id_comment`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `party`
--
ALTER TABLE `party`
  ADD PRIMARY KEY (`id_party`);

--
-- Indexes for table `party_members`
--
ALTER TABLE `party_members`
  ADD KEY `party_id` (`party_id`),
  ADD KEY `members_party_id` (`members_party_id`);

--
-- Indexes for table `private_message`
--
ALTER TABLE `private_message`
  ADD PRIMARY KEY (`id_message`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id_users_roles`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `game_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `game_comments`
--
ALTER TABLE `game_comments`
  MODIFY `id_comment` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `party`
--
ALTER TABLE `party`
  MODIFY `id_party` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `private_message`
--
ALTER TABLE `private_message`
  MODIFY `id_message` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id_users_roles` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games_genres`
--
ALTER TABLE `games_genres`
  ADD CONSTRAINT `games_genres_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`),
  ADD CONSTRAINT `games_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id_genre`);

--
-- Constraints for table `party_members`
--
ALTER TABLE `party_members`
  ADD CONSTRAINT `party_members_ibfk_1` FOREIGN KEY (`party_id`) REFERENCES `party` (`id_party`),
  ADD CONSTRAINT `party_members_ibfk_2` FOREIGN KEY (`members_party_id`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
