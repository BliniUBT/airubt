using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface ICityRepository
    {
        Task<IEnumerable> GetCities();
        Task<City> GetCityByName(string name);
        void CreateCity(City city);
        void UpdateCity(City city);
        void DeleteCity(string name);
    }
}
