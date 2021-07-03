Create Database airubt
use airubt

create table [User](
	ID int identity(1,1) primary key,
	Firstname varchar(250) not null,
	Lastname varchar(250) not null,
	BirthDate date not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
)
Alter table [User] add Age as DATEDIFF(YEAR, BirthDate, GETDATE())
ALter table [User] add PhoneNumber varchar(100)

---------------------------------------------------------------------------------------------------------------------
create table Host(
	ID int identity(1,1) primary key,
	Firstname varchar(250) not null,
	Lastname varchar(250) not null,
	BirthDate date not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
)
Alter table Host add Age as DATEDIFF(YEAR, BirthDate, GETDATE())
ALter table Host add PhoneNumber varchar(100)

---------------------------------------------------------------------------------------------------------------------

Create table City(
	Name varchar(250) primary key,
	ZipCode int  not null,
	Country varchar(100) not null
)
Select * from City
ALTER TABLE City
ALTER COLUMN ZipCode varchar(255);
---------------------------------------------------------------------------------------------------------------------


Create table Category(
	Name nvarchar(50) primary key
)
---------------------------------------------------------------------------------------------------------------------

Create table Apartment(
	ID int IDENTITY(1,1) primary key,
	Address nvarchar(200),
	Rooms int,
	Space int,
	MaxGuests int,
	Toilets int,
	Terrace bit,
	Garden bit,
	Garage bit,
	Review int,
	Notes nvarchar(500),
	HostID int foreign key references Host(ID)
)
Alter table Apartment add City varchar(250) foreign key references City(Name)
Alter table Apartment add Category varchar(50) foreign key references Category(Name)

---------------------------------------------------------------------------------------------------------------------

Create table Appointment(
	ID int identity(1,1) primary key,
	Guests int,
	Checkin datetime,
	Checkout datetime,
	Notes varchar(250),
	UserID int foreign key references [User](ID),
	ApartmentID int foreign key references Apartment(ID)
)

---------------------------------------------------------------------------------------------------------------------

Create table Admin(
	ID int identity(1,1) primary key,
	Firstname varchar(250) not null,
	Lastname varchar(250) not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
	PhoneNumber varchar(100) not null
)

---------------------------------------------------------------------------------------------------------------------

Create table Activity(
	ID int identity(1,1) primary key,
	Name varchar(250) not null,
	StartDate date not null,
	EndDate date not null,
	StartTime time not null,
	EndTime time not null,
	Price money,
	City varchar(250) foreign key references City(Name),
	Host int foreign key references Host(ID)
)

Alter table Activity add Timelength as DATEDIFF(MINUTE, StartTime , EndTime)

---------------------------------------------------------------------------------------------------------------------

