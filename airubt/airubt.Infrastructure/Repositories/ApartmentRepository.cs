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
    public class ApartmentRepository : IApartmentRepository
    {
        public readonly airubtContext _ctx;
        public ApartmentRepository(airubtContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<Apartment> CreateApartment(Apartment _)
        {
            _ctx.Apartments.AddAsync(_);
            _ctx.SaveChanges();
            return _;
        }

        public void DeleteApartment(int id)
        {
            var deleteApartment = _ctx.Apartments.FirstOrDefault(_ => _.Id == id);
            _ctx.Apartments.Remove(deleteApartment);
            _ctx.SaveChanges();
        }

        public async Task<Apartment> GetApartmentById(int id)
        {
            var apartment = _ctx.Apartments.FirstOrDefault(_ => _.Id == id);
            return apartment;
        }

        public async Task<IEnumerable> GetApartments(int id)
        {
            var apps = await _ctx.Apartments.Where(_ => _.HostId == id).ToListAsync();
            return apps;
        }

        public async Task<IEnumerable> GetApartments()
        {
            var apps = await _ctx.Apartments.ToListAsync();
            return apps;
        }

        public async Task<Apartment> UpdateApartment(Apartment _)
        {
            _ctx.Apartments.Update(_);
            _ctx.SaveChanges();
            return _;
        }
    }
}
