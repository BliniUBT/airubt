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
    public class HostService : IHostService
    {
        private readonly IHostRepository _hostRepository;
        private readonly JwtService _jwtService;
        public HostService(IHostRepository hostRepository, JwtService jwtService)
        {
            _hostRepository = hostRepository;
            _jwtService = jwtService;
        }

        public async Task<Host> CreateHost(Host host)
        {
            return await _hostRepository.CreateHost(host);
        }

        public async Task<Host> Register(Host host
            )
        {
            host.Password = BCrypt.Net.BCrypt.HashPassword(host.Password);
            return await _hostRepository.CreateHost(host);
        }

        public async Task<Host> Login(Host host)
        {
            var holder = await _hostRepository.GetHostByEmail(host.Email);
            if (holder != null)
            {
                if (BCrypt.Net.BCrypt.Verify(host.Password, holder.Password))
                {
                    return holder;
                }
            }
            return null;
        }

        public void DeleteHost(int id)
        {
            _hostRepository.DeleteHost(id);
        }

        public async Task<Host> GetHostById(int id)
        {
            return await _hostRepository.GetHostById(id);
        }

        public async Task<Host> GetHostByEmail(string email)
        {
            return await _hostRepository.GetHostByEmail(email);
        }

        public async Task<Host> UpdateHost(Host host)
        {
            return await _hostRepository.UpdateHost(host);
        }

        public async Task<IEnumerable> HostsList()
        {
            return await _hostRepository.GetHosts();
        }
    }
}
