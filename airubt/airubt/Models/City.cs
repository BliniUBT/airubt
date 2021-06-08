using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.API.Models
{
    public partial class City
    {
        public City()
        {
            Activities = new HashSet<Activity>();
            Apartments = new HashSet<Apartment>();
        }

        public string Name { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }

        public virtual ICollection<Activity> Activities { get; set; }
        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
