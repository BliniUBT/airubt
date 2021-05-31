﻿using airubt.Domain.Interfaces;
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
        public void CreateUser(User user)
        {
            _ctx.Users.AddAsync(user);
            _ctx.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            _ctx.Remove(id);
            _ctx.SaveChanges();
        }

        public Task<User> GetUserById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable> GetUsers()
        {
            return await _ctx.Users.ToListAsync();
        }

        public void UpdateUser(User user)
        {
            _ctx.Users.Update(user);
            _ctx.SaveChanges();
        }
    }
}
