using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using airubt.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Infrastructure.Repositories
{
    public class HostRepository : IHostRepository
    {
        public readonly airubtContext _ctx;
        public HostRepository(airubtContext ctx)
        {
            _ctx = ctx;
        }
        public void CreateHost(Host host)
        {
            _ctx.Hosts.AddAsync(host);
        }

        public Task DeleteHost(Host host)
        {
            throw new NotImplementedException();
        }

        public Task<Host> GetHostById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable> GetHosts()
        {
            return await _ctx.Hosts.ToListAsync();
        }

        public Task UpdateHost(Host host)
        {
            throw new NotImplementedException();
        }
    }
}
