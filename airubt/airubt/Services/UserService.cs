using airubt.API.Helpers;
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
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;
        public UserService(IUserRepository userRepository, JwtService jwtService)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        public async Task<User> CreateUser(User user)
        {
            return await _userRepository.CreateUser(user);
        }

        public async Task<User> Register(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            return await _userRepository.CreateUser(user);
        }

        public async Task<User> Login(User user)
        {
            var holder = await _userRepository.GetUserByEmail(user.Email);
            if (holder != null)
            {
                if(BCrypt.Net.BCrypt.Verify(user.Password, holder.Password))
                {                    
                    return holder;
                }
            }
            return null;
        }

        public void DeleteUser(int id)
        {
            _userRepository.DeleteUser(id);
        }

        public async Task<User> GetUserById(int id)
        {
            return await _userRepository.GetUserById(id);
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await _userRepository.GetUserByEmail(email);
        }

        public async Task<User> UpdateUser(User user)
        {
            return await _userRepository.UpdateUser(user);
        }

        public async Task<IEnumerable> UsersList()
        {
            return await _userRepository.GetUsers();
        }
    }
}
