using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.Domain.Models
{
    public partial class Apartment
    {
        public Apartment()
        {
            Appointments = new HashSet<Appointment>();
        }

        public int Id { get; set; }
        public string Address { get; set; }
        public int? Rooms { get; set; }
        public int? Space { get; set; }
        public int? MaxGuests { get; set; }
        public int? Toilets { get; set; }
        public bool? Terrace { get; set; }
        public bool? Garden { get; set; }
        public bool? Garage { get; set; }
        public int? Review { get; set; }
        public string Notes { get; set; }
        public int? HostId { get; set; }
        public string City { get; set; }
        public string Category { get; set; }

        public virtual Category CategoryNavigation { get; set; }
        public virtual City CityNavigation { get; set; }
        public virtual Host Host { get; set; }
        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
