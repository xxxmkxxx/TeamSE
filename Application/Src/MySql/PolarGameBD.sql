create table users_roles(
	id_users_roles integer primary key AUTO_INCREMENT,
	users_role text
);

create table users(
	id_user integer primary key AUTO_INCREMENT,
	login text,
	password text,
	email text,
	id_users_roles integer references UsersRoles(id_users_roles),
	user_icon text,
	user_description text
);

create table private_message(
	id_message integer primary key AUTO_INCREMENT,
	id_sender integer references Users(id_user),
	id_receiver integer references Users(id_user),
	date_time datetime,
	message_text text
);

create table genres(
	id_genre integer primary key AUTO_INCREMENT,
	genre text
);

create table game(
	id_game integer primary key AUTO_INCREMENT,
	game_name text,
	game_description text,
	game_icon_link text,
	popularity integer
);

create table games_genres(
	game_id integer not null,
	genre_id integer not null,
	foreign key (game_id) references Game(id_game),
	foreign key (genre_id) references Genres(id_genre)
);

create table game_comments(
	id_comment integer primary key AUTO_INCREMENT, 
	id_game integer references Game(id_game),
	id_user integer references Users(id_user),
	comment_text text,
	date_time datetime
);

create table party(
	id_party integer primary key AUTO_INCREMENT, 
	id_game integer references Game(id_game),
	party_password text,
	gamers_amount integer,
	party_description text,
	privacy text,
	party_icon text,
	party_creator integer references Users(id_user)
);

/*create table PartyMembers(
	id_party integer primary key AUTO_INCREMENT, 
	
	id_user integer references Users(id_user),
	
);*/

create table party_members(
	party_id integer not null,
	members_party_id integer not null,
	foreign key (party_id) references Party(id_party),
	foreign key (members_party_id) references Users(id_user),
	party_member_role text,
	nickname text
);

/*create table TeamMemberRole(
	id_teamMemberRole integer primary key AUTO_INCREMENT, 
	TeamMemberRole text
);

create table Team(
	id_team integer primary key AUTO_INCREMENT, 
	TeamName text,
	id_game integer references Game(id_game),
	Privacy text,
	Popularity integer
);

create table TeamMembers(
	id_team integer primary key AUTO_INCREMENT, 
	id_teamMemberRole integer references TeamMemberRole(id_teamMemberRole),
	id_user integer references Users(id_user)
);

create table team_members(
	team_id integer not null,
	members_team_id integer not null,
	foreign key (team_id) references Team(id_team),
	foreign key (members_team_id) references TeamMembers(id_team)
);

create table TeamMessage(
	id_message integer primary key, 
	id_sender integer references Users(id_user),
	id_team integer references Team(id_team),
	Date_Time datetime,
	MessageText text
)*/