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
    public class CityService : ICityService
    {
        private ICityRepository _cityRepository;
        public CityService(ICityRepository cityRepository)
        {
            _cityRepository = cityRepository;
        }

        public void CreateCity(City city)
        {
            _cityRepository.CreateCity(city);
        }

        public void DeleteCity(string name)
        {
            _cityRepository.DeleteCity(name);
        }

        public Task<City> GetCityByName(string name)
        {
            throw new NotImplementedException();
        }

        public void UpdateCity(City city)
        {
            _cityRepository.UpdateCity(city);
        }

        public async Task<IEnumerable> CitiesList()
        {
            return await _cityRepository.GetCities();
        }
    }
}
