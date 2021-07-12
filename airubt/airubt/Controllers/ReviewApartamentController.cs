using airubt.Domain.Interfaces;
using airubt.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace airubt.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewApartamentController : ControllerBase
    {
        private readonly IReviewApartament _services;

        public ReviewApartamentController(IReviewApartament services)
        {
            _services = services;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getReviews( int id) {
            var model = await _services.getReviews(id);

            return Ok(model);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteReview(int id)
        {
            var model = await _services.deleteReview(id);
            if (!model) {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> addReview(ApartamentReview review)
        {
            var model = await _services.postReview(review);
            if (!model)
            {
                return BadRequest();
            }
            return Ok(model);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> updateReview(ApartamentReview review)
        {
            var model = await _services.updateReview(review);
            if (!model) {
                return BadRequest();

            }

            return Ok(model);
        }
    }
}
