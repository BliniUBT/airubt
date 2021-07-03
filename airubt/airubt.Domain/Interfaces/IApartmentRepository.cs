using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IApartmentRepository
    {
        Task<IEnumerable> GetApartments(int id);
        Task<IEnumerable> GetApartments();

        Task<Apartment> GetApartmentById(int id);
        Task<Apartment> CreateApartment(Apartment _);
        Task<Apartment> UpdateApartment(Apartment _);
        void DeleteApartment(int id);
    }
}
