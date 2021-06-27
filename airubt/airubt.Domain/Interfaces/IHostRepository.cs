using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IHostRepository
    {
        Task<IEnumerable> GetHosts();
        Task<Host> GetHostById(int id);
        Task<Host> CreateHost(Host host);
        Task<Host> UpdateHost(Host host);
        Task<Host> GetHostByEmail(string email);
        void DeleteHost(int id);
    }
}
