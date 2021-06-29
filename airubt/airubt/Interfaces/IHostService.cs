using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace airubt.API.Interfaces
{
    public interface IHostService
    {
        Task<IEnumerable> HostsList();
        Task<Host> CreateHost(Host host);
        Task<Host> Register(Host host);
        Task<Host> UpdateHost(Host host);
        void DeleteHost(int id);
        Task<Host> GetHostById(int id);
        Task<Host> GetHostByEmail(string email);
        Task<Host> Login(Host host);
        Task<Host> LoggedHost();
    }
}
