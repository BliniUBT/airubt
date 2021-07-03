using airubt.API.Interfaces;
using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace airubt.API.Services
{
    public class ApartmentService : IApartmentService
    {
        private readonly IApartmentRepository _apartmentRepository;
        public ApartmentService(IApartmentRepository apartmentRepository)
        {
            _apartmentRepository = apartmentRepository;
        }
        public async Task<IEnumerable> ApartmentsList(int id)
        {
            return await _apartmentRepository.GetApartments(id);
        }

        public async Task<IEnumerable> ApartmentsList()
        {
            return await _apartmentRepository.GetApartments();

        }

        public async Task<Apartment> CreateApartment(Apartment _)
        {
            return await _apartmentRepository.CreateApartment(_);
        }

        public void DeleteApartment(int id)
        {
            _apartmentRepository.DeleteApartment(id);
        }

        public async Task<Apartment> GetApartmentById(int id)
        {
            return await _apartmentRepository.GetApartmentById(id);
        }

        public async Task<Apartment> UpdateApartment(Apartment _)
        {
            return await _apartmentRepository.UpdateApartment(_);
        }
    }
}
