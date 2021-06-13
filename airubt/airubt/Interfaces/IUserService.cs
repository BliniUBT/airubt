using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.API.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable> UsersList();
        Task<User> CreateUser(User user);
        Task<User> Register(User user);
        Task<User> UpdateUser(User user);
        void DeleteUser(int id);
        Task<User> GetUserById(int id);
        Task<User> GetUserByEmail(string email);
        Task<User> Login(User user);
    }
}
