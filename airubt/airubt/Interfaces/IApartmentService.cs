using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace airubt.API.Interfaces
{
    public interface IApartmentService
    {
        Task<IEnumerable> ApartmentsList(int id);
        Task<IEnumerable> ApartmentsList();

        Task<Apartment> CreateApartment(Apartment _);
        Task<Apartment> UpdateApartment(Apartment _);
        void DeleteApartment(int id);
        Task<Apartment> GetApartmentById(int id);



    }
}
