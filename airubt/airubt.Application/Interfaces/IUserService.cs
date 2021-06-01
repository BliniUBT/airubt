using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Application.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable> UsersList();
        void CreateUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int id);
        Task<User> GetUserById();
    }
}
