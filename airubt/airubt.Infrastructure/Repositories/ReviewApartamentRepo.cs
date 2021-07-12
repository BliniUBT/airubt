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
    public class ReviewApartamentRepo : IReviewApartament
    {
        private readonly airubtContext _db;

        public ReviewApartamentRepo(airubtContext db)
        {
            _db = db;
        }

        public async Task<List<ApartamentReview>> getReviews(int id)
        {

            List<ApartamentReview> model = new List<ApartamentReview>();
            try
            {
                model = await _db.ApartamentReviews.Where(x => x.apartamentId == id).ToListAsync();
            }
            catch (Exception e)
            {

            }
            return model;
        }

        public async Task<bool> postReview(ApartamentReview review)
        {
            try
            {
                var model = await _db.ApartamentReviews.AddAsync(review);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;

            }
        }

        public async Task<bool> updateReview(ApartamentReview review)
        {
            try
            {
                var model = await _db.ApartamentReviews.FirstOrDefaultAsync(x=>x.Id == review.Id);
                model.stars = review.stars;
                model.Review = review.Review;
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;

            }
        }

        public async Task<bool> deleteReview(int id)
        {
            try
            {
                var model = await _db.ApartamentReviews.FirstOrDefaultAsync(x => x.Id == id);
               
                 _db.ApartamentReviews.Remove(model);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;

            }
        }

      
    }
}
