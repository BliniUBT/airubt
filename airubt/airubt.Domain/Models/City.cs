using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.Domain.Models
{
    public partial class City
    {
        public City()
        {
            Apartments = new HashSet<Apartment>();
        }

        public string Name { get; set; }
        public int ZipCode { get; set; }
        public string Country { get; set; }

        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
