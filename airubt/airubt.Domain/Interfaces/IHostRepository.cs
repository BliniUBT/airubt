using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IHostRepository
    {
        Task<IEnumerable> GetHosts();
        Task<Host> GetHostById(int id);
        void CreateHost(Host host);
        Task UpdateHost(Host host);
        Task<Host> DeleteHost(int id);
    }
}
