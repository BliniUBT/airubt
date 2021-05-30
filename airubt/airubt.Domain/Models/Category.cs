using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.Domain.Models
{
    public partial class Category
    {
        public Category()
        {
            Apartments = new HashSet<Apartment>();
        }

        public string Name { get; set; }

        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
