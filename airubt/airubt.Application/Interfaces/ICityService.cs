using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Application.Interfaces
{
    public interface ICityService
    {
        Task<IEnumerable> CitiesList();
        void CreateCity(City city);
        void UpdateCity(City city);
        void DeleteCity(string name);
        Task<City> GetCityByName(string name);
    }
}
