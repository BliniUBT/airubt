using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace airubt.Infrastructure.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Firstname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Lastname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Email = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Password = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Category__737584F7673CF758", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    ZipCode = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    Country = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__City__737584F758D30F32", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Host",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Firstname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Lastname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    BirthDate = table.Column<DateTime>(type: "date", nullable: false),
                    Email = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Password = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Age = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(year,[BirthDate],getdate()))", stored: false),
                    PhoneNumber = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Host", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Firstname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Lastname = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    BirthDate = table.Column<DateTime>(type: "date", nullable: false),
                    Email = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Password = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    Age = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(year,[BirthDate],getdate()))", stored: false),
                    PhoneNumber = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Activity",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: false),
                    StartDate = table.Column<DateTime>(type: "date", nullable: false),
                    EndDate = table.Column<DateTime>(type: "date", nullable: false),
                    StartTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    EndTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    Price = table.Column<decimal>(type: "money", nullable: true),
                    City = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Host = table.Column<int>(type: "int", nullable: true),
                    Timelength = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(minute,[StartTime],[EndTime]))", stored: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activity", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Activity__City__4BAC3F29",
                        column: x => x.City,
                        principalTable: "City",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Activity__Host__4CA06362",
                        column: x => x.Host,
                        principalTable: "Host",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Apartment",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Rooms = table.Column<int>(type: "int", nullable: true),
                    Space = table.Column<int>(type: "int", nullable: true),
                    MaxGuests = table.Column<int>(type: "int", nullable: true),
                    Toilets = table.Column<int>(type: "int", nullable: true),
                    Terrace = table.Column<bool>(type: "bit", nullable: true),
                    Garden = table.Column<bool>(type: "bit", nullable: true),
                    Garage = table.Column<bool>(type: "bit", nullable: true),
                    Review = table.Column<int>(type: "int", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    HostID = table.Column<int>(type: "int", nullable: true),
                    City = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Category = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartment", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Apartment__Categ__403A8C7D",
                        column: x => x.Category,
                        principalTable: "Category",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Apartment__City__3F466844",
                        column: x => x.City,
                        principalTable: "City",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Apartment__HostI__3E52440B",
                        column: x => x.HostID,
                        principalTable: "Host",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ApartamentReviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Review = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    apartamentId = table.Column<int>(type: "int", nullable: false),
                    stars = table.Column<int>(type: "int", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApartamentReviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApartamentReviews_Apartment_apartamentId",
                        column: x => x.apartamentId,
                        principalTable: "Apartment",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ApartamentReviews_User_userId",
                        column: x => x.userId,
                        principalTable: "User",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Appointment",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Guests = table.Column<int>(type: "int", nullable: true),
                    Checkin = table.Column<DateTime>(type: "datetime", nullable: true),
                    Checkout = table.Column<DateTime>(type: "datetime", nullable: true),
                    Notes = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: true),
                    ApartmentID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointment", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Appointme__Apart__440B1D61",
                        column: x => x.ApartmentID,
                        principalTable: "Apartment",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Appointme__UserI__4316F928",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Activity_City",
                table: "Activity",
                column: "City");

            migrationBuilder.CreateIndex(
                name: "IX_Activity_Host",
                table: "Activity",
                column: "Host");

            migrationBuilder.CreateIndex(
                name: "IX_ApartamentReviews_apartamentId",
                table: "ApartamentReviews",
                column: "apartamentId");

            migrationBuilder.CreateIndex(
                name: "IX_ApartamentReviews_userId",
                table: "ApartamentReviews",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Apartment_Category",
                table: "Apartment",
                column: "Category");

            migrationBuilder.CreateIndex(
                name: "IX_Apartment_City",
                table: "Apartment",
                column: "City");

            migrationBuilder.CreateIndex(
                name: "IX_Apartment_HostID",
                table: "Apartment",
                column: "HostID");

            migrationBuilder.CreateIndex(
                name: "IX_Appointment_ApartmentID",
                table: "Appointment",
                column: "ApartmentID");

            migrationBuilder.CreateIndex(
                name: "IX_Appointment_UserID",
                table: "Appointment",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activity");

            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropTable(
                name: "ApartamentReviews");

            migrationBuilder.DropTable(
                name: "Appointment");

            migrationBuilder.DropTable(
                name: "Apartment");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "Host");
        }
    }
}
