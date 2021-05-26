Create Database airubt
use airubt

create table Users(
	UserID int identity(1,1) primary key,
	Name varchar(250) not null,
	LastName varchar(250) not null,
	DateOfBirth date not null,
	Address varchar(250) not null,
	Email varchar(250) not null,
	Password varchar(250) not null,
	Role bit
)
Alter table Users add Age as DATEDIFF(YEAR, DateOfBirth, GETDATE())


