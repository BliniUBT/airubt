using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.API.Models
{
    public partial class Appointment
    {
        public int Id { get; set; }
        public int? Guests { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Notes { get; set; }
        public int? UserId { get; set; }
        public int? ApartmentId { get; set; }

        public virtual Apartment Apartment { get; set; }
        public virtual User User { get; set; }
    }
}
