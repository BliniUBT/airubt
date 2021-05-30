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
        void CreateUser(User user);
        Task UpdateUser(User user);
        Task DeleteUser(User user);
    }
}
