Create Database airubt
use airubt

Create table City(
CityName varchar primary key,
ZipCode int  not null,
Shteti varchar(100) not null
)

Create table Categories(
CategoriesID int primary key,
CategoriesName varchar (100),
)