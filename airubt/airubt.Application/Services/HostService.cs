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
    public class HostService : IHostService
    {
        private IHostRepository _hostRepository;
        public HostService(IHostRepository hostRepository)
        {
            _hostRepository = hostRepository;
        }

        public void CreateHost(Host host)
        {
            _hostRepository.CreateHost(host);
        }

        public void DeleteHost(int id)
        {
            _hostRepository.DeleteHost(id);
        }

        public Task<Host> GetHostById()
        {
            throw new NotImplementedException();
        }

        public void UpdateHost(Host host)
        {
            _hostRepository.UpdateHost(host);
        }

        public async Task<IEnumerable> HostsList()
        {
            return await _hostRepository.GetHosts();
        }
    }
}
