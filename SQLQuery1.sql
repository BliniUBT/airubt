Create Database airubt
use airubt

create table Users(
	UserID int identity(1,1) primary key,
	Name varchar(250) not null,
	LastName varchar(250) not null,
	DateOfBirth date not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
)
Alter table Users add Age as DATEDIFF(YEAR, DateOfBirth, GETDATE())
ALter table Users add PhoneNumber varchar(100)

Select * from Users
---------------------------------------------------------------------------------------------------------------------
create table Hosts(
	HostID int identity(1,1) primary key,
	Name varchar(250) not null,
	LastName varchar(250) not null,
	DateOfBirth date not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
)
Alter table Hosts add Age as DATEDIFF(YEAR, DateOfBirth, GETDATE())
ALter table Hosts add PhoneNumber varchar(100)

Select * from Hosts

---------------------------------------------------------------------------------------------------------------------

Create table City(
	CityName varchar primary key,
	ZipCode int  not null,
	Shteti varchar(100) not null
)

---------------------------------------------------------------------------------------------------------------------


Create table Categories(
	CategoriesName varchar(50) primary key
)

---------------------------------------------------------------------------------------------------------------------

Create table Apartment(
	ApartmentID int IDENTITY(1,1) primary key,
	Address varchar(200),
	Rooms int,
	Space float,
	MaxGuests int,
	Toilets int,
	Terrace bit,
	Garden bit,
	Garage bit,
	Checkin time,
	Checkout time,
	Review float,
	Notes varchar(500),
	HostID int foreign key references Hosts(HostID)
)

---------------------------------------------------------------------------------------------------------------------

Create table Appointment(
	AppointmentID int identity(1,1) primary key,
	Guests int,
	StartDate date,
	EndDate date,
	Notes varchar(250),
	UserID int foreign key references Users(UserID),
	ApartmentID int foreign key references Apartment(ApartmentID)
)

---------------------------------------------------------------------------------------------------------------------

