create table UsersRoles(
	id_UsersRoles integer primary key,
	UsersRole text
);

create table Users(
	id_user integer primary key,
	Login text,
	Password text,
	Email text,
	id_UsersRoles integer references UsersRoles(id_UsersRoles),
	UserIcon text,
	UserDescription text
);

create table PrivateMessage(
	id_message integer primary key,
	id_sender integer references Users(id_user),
	id_receiver integer references Users(id_user),
	Date_Time datetime,
	MessageText text
);

create table Genres(
	id_genre integer primary key,
	Genre text
);

create table Game(
	id_game integer primary key,
	GameName text,
	id_genre integer unique,
	GameDescription text,
	GameIconLink text,
	Popularity integer
);

create table games_genres(
	game_id integer not null,
	genre_id integer not null,
	foreign key (game_id) references Game(id_genre),
	foreign key (genre_id) references Genres(id_genre)
);

create table GameComments(
	id_comment integer primary key, 
	id_game integer references Game(id_game),
	id_user integer references Users(id_user),
	CommentText text,
	Date_Time datetime
);

create table Party(
	id_party integer primary key, 
	id_game integer references Game(id_game),
	GamersAmount integer,
	PartyDescription text,
	Privacy text,
	PartyIcon text,
	PartyCreator integer references Users(id_user)
);

create table PartyMembers(
	id_party integer primary key, 
	PartyMemberRole text,
	id_user integer references Users(id_user),
	Nickname text
);

create table party_members(
	party_id integer not null,
	members_party_id integer not null,
	foreign key (party_id) references Party(id_party),
	foreign key (members_party_id) references PartyMembers(id_party)
);

create table TeamMemberRole(
	id_teamMemberRole integer primary key, 
	TeamMemberRole text
);

create table Team(
	id_team integer primary key, 
	TeamName text,
	id_game integer references Game(id_game),
	Privacy text,
	Popularity integer
);

create table TeamMembers(
	id_team integer primary key, 
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
)