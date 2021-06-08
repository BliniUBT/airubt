using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.API.Models
{
    public partial class Host
    {
        public Host()
        {
            Activities = new HashSet<Activity>();
            Apartments = new HashSet<Apartment>();
        }

        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? Age { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<Activity> Activities { get; set; }
        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
