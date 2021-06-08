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
            _ctx.SaveChanges();
        }

        public void DeleteHost(int id)
        {
            var deleteHost = _ctx.Hosts.FirstOrDefault(_ => _.Id == id);
            _ctx.Hosts.Remove(deleteHost);
            _ctx.SaveChanges();
        }

        public async Task<Host> GetHostById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable> GetHosts()
        {
            return await _ctx.Hosts.ToListAsync();
        }

        public void UpdateHost(Host host)
        {
            _ctx.Hosts.Update(host);
            _ctx.SaveChanges();
        }
    }
}
