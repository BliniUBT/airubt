using airubt.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace airubt.Domain.Interfaces
{
    public interface IReviewApartament
    {
        Task<List<ApartamentReview>> getReviews(int id );
        Task<bool> postReview(ApartamentReview review);
        Task<bool> deleteReview(int id);
        Task<bool> updateReview(ApartamentReview review);


    }
}
