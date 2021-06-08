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
    public class CityRepository : ICityRepository
    {
        public readonly airubtContext _ctx;
        public CityRepository(airubtContext ctx)
        {
            _ctx = ctx;
        }
        public void CreateCity(City city)
        {
            _ctx.Cities.AddAsync(city);
            _ctx.SaveChanges();
        }

        public void DeleteCity(string name)
        {
            var deleteCity = _ctx.Cities.FirstOrDefault(_ => _.Name.Equals(name));
            _ctx.Cities.Remove(deleteCity);
            _ctx.SaveChanges();
        }

        public async Task<City> GetCityByName(string name)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable> GetCities()
        {
            return await _ctx.Cities.ToListAsync();
        }

        public void UpdateCity(City city)
        {
            _ctx.Cities.Update(city);
            _ctx.SaveChanges();
        }
    }
}

