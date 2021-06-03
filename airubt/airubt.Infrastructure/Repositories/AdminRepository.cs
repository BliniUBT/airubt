using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using airubt.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Infrastructure.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        public readonly airubtContext _ctx;
        public AdminRepository(airubtContext ctx)
        {
            _ctx = ctx;
        }
        public void CreateAdmin(Admin admin)
        {
            _ctx.Admins.AddAsync(admin);
            _ctx.SaveChanges();
        }

        public void DeleteAdmin(int id)
        {
            var deleteAdmin = _ctx.Admins.FirstOrDefault(_ => _.Id == id);
            _ctx.Admins.Remove(deleteAdmin);
            _ctx.SaveChanges();
        }

        public async Task<Admin> GetAdminById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable> GetAdmins()
        {
            return await _ctx.Admins.ToListAsync();
        }

        public void UpdateAdmin(Admin admin)
        {
            _ctx.Admins.Update(admin);
            _ctx.SaveChanges();
        }
    }
}
