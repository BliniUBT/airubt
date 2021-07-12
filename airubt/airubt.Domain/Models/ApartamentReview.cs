using System;
using System.Collections.Generic;
using System.Text;

namespace airubt.Domain.Models
{
    public class ApartamentReview
    {
        public int Id { get; set; }
        public string Review { get; set; }
        public int apartamentId { get; set; }
        public int stars { get; set; }
        public virtual Apartment apartament { get; set; }
        public int userId { get; set; }
        public virtual  User user { get; set; }
    }
}
