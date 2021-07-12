using System;
using airubt.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace airubt.Infrastructure.Context
{
    public partial class airubtContext : DbContext
    {
        public airubtContext()
        {
        }

        public airubtContext(DbContextOptions<airubtContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Activity> Activities { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Apartment> Apartments { get; set; }
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Host> Hosts { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<ApartamentReview> ApartamentReviews{get;set;}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=airubt;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Activity>(entity =>
            {
                entity.ToTable("Activity");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.City).HasMaxLength(250);

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.Timelength).HasComputedColumnSql("(datediff(minute,[StartTime],[EndTime]))", false);

                entity.HasOne(d => d.CityNavigation)
                    .WithMany(p => p.Activities)
                    .HasForeignKey(d => d.City)
                    .HasConstraintName("FK__Activity__City__4BAC3F29");

                entity.HasOne(d => d.HostNavigation)
                    .WithMany(p => p.Activities)
                    .HasForeignKey(d => d.Host)
                    .HasConstraintName("FK__Activity__Host__4CA06362");
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Apartment>(entity =>
            {
                entity.ToTable("Apartment");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Address).HasMaxLength(200);

                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.City).HasMaxLength(250);

                entity.Property(e => e.HostId).HasColumnName("HostID");

                entity.Property(e => e.Notes).HasMaxLength(500);

                entity.HasOne(d => d.CategoryNavigation)
                    .WithMany(p => p.Apartments)
                    .HasForeignKey(d => d.Category)
                    .HasConstraintName("FK__Apartment__Categ__403A8C7D");

                entity.HasOne(d => d.CityNavigation)
                    .WithMany(p => p.Apartments)
                    .HasForeignKey(d => d.City)
                    .HasConstraintName("FK__Apartment__City__3F466844");

                entity.HasOne(d => d.Host)
                    .WithMany(p => p.Apartments)
                    .HasForeignKey(d => d.HostId)
                    .HasConstraintName("FK__Apartment__HostI__3E52440B");
            });

            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.ToTable("Appointment");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ApartmentId).HasColumnName("ApartmentID");

                entity.Property(e => e.Checkin).HasColumnType("datetime");

                entity.Property(e => e.Checkout).HasColumnType("datetime");

                entity.Property(e => e.Notes)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Apartment)
                    .WithMany(p => p.Appointments)
                    .HasForeignKey(d => d.ApartmentId)
                    .HasConstraintName("FK__Appointme__Apart__440B1D61");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Appointments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Appointme__UserI__4316F928");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("PK__Category__737584F7673CF758");

                entity.ToTable("Category");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("PK__City__737584F758D30F32");

                entity.ToTable("City");

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Host>(entity =>
            {
                entity.ToTable("Host");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Age).HasComputedColumnSql("(datediff(year,[BirthDate],getdate()))", false);

                entity.Property(e => e.BirthDate).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Age).HasComputedColumnSql("(datediff(year,[BirthDate],getdate()))", false);

                entity.Property(e => e.BirthDate).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
