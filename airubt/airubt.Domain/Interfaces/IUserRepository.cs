using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable> GetUsers();
        Task<User> GetUserById(int id);
        Task<User> CreateUser(User user);
        Task<User> UpdateUser(User user);
        Task<User> GetUserByEmail(string email);
        void DeleteUser(int id);
    }
}
