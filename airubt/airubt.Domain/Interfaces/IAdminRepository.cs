using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IAdminRepository
    {
        Task<IEnumerable> GetAdmins();
        Task<Admin> GetAdminById(int id);
        void CreateAdmin(Admin admin);
        void UpdateAdmin(Admin admin);
        void DeleteAdmin(int id);
    }
}
