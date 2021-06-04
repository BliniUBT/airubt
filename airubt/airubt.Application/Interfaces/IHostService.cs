using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Application.Interfaces
{
    public interface IHostService
    {
        Task<IEnumerable> HostsList();
        void CreateHost(Host host);
        void UpdateHost(Host host);
        void DeleteHost(int id);
        Task<Host> GetHostById();
    }
}
