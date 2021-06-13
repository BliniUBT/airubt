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
    public class UserRepository : IUserRepository
    {
        public readonly airubtContext _ctx;
        public UserRepository(airubtContext ctx) {
            _ctx = ctx;
        }
        public async Task<User> CreateUser(User user)
        {
            _ctx.Users.AddAsync(user);
            _ctx.SaveChanges();
            return user;
        }

        public void DeleteUser(int id)
        {
            var deleteUser = _ctx.Users.FirstOrDefault(_ => _.Id == id);
            _ctx.Users.Remove(deleteUser);
            _ctx.SaveChanges();
        }

        public async Task<User> GetUserById(int id)
        {
            var user = _ctx.Users.FirstOrDefault(_ => _.Id == id);
            return user;
        }

        public async Task<User> GetUserByEmail(string email)
        {
            var user = _ctx.Users.FirstOrDefault(_ => _.Email == email);
            return user;
        }

        public async Task<IEnumerable> GetUsers()
        {
            return await _ctx.Users.ToListAsync();
        }

        public async Task<User> UpdateUser(User user)
        {
            _ctx.Users.Update(user);
            _ctx.SaveChanges();
            return user;
        }
    }
}
