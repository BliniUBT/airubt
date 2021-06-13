using airubt.API.Interfaces;
using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.API.Services
{
    public class AdminService : IAdminService
    {
        private IAdminRepository _adminRepository;
        public AdminService(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        public void CreateAdmin(Admin admin)
        {
            _adminRepository.CreateAdmin(admin);
        }

        public void DeleteAdmin(int id)
        {
            _adminRepository.DeleteAdmin(id);
        }

        public Task<Admin> GetAdminById()
        {
            throw new NotImplementedException();
        }

        public void UpdateAdmin(Admin admin)
        {
            _adminRepository.UpdateAdmin(admin);
        }

        public async Task<IEnumerable> AdminsList()
        {
            return await _adminRepository.GetAdmins();
        }
    }
}
