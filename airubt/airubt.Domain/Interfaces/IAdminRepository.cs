using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IAdminRepository
    {
        Task<IEnumerable> GetAdmins();
        Task<Admin> GetAdminById(int id);
        void CreateAdmin(Admin admin);
        Task UpdateAdmin(Admin admin);
        Task<Admin> DeleteAdmin(int id);
    }
}
