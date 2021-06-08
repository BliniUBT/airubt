using System;
using System.Collections.Generic;

#nullable disable

namespace airubt.API.Models
{
    public partial class Admin
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
    }
}
