using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.Domain.Models
{
    public partial class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public decimal? Price { get; set; }
        public string City { get; set; }
        public int? Host { get; set; }
        public int? Timelength { get; set; }

        public virtual City CityNavigation { get; set; }
        public virtual Host HostNavigation { get; set; }
    }
}
