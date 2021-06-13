using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.API.Interfaces
{
    public interface IAdminService
    {
        Task<IEnumerable> AdminsList();
        void CreateAdmin(Admin admin);
        void UpdateAdmin(Admin admin);
        void DeleteAdmin(int id);
        Task<Admin> GetAdminById();
    }
}
