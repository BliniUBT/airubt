using airubt.Application.Interfaces;
using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Application.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public void CreateUser(User user)
        {
            _userRepository.CreateUser(user);
        }

        public void DeleteUser(int id)
        {
            _userRepository.DeleteUser(id);
        }

        public Task<User> GetUserById()
        {
            throw new NotImplementedException();
        }

        public void UpdateUser(User user)
        {
            _userRepository.UpdateUser(user);
        }

        public async Task<IEnumerable> UsersList()
        {
            return await _userRepository.GetUsers();
        }
    }
}
