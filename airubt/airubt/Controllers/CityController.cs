using airubt.API.Interfaces;
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
    public class CityController : ControllerBase
    {
        private ICityService _cityService;

        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [HttpGet("getCities")]
        public async Task<IActionResult> GetCities() => Ok(await _cityService.CitiesList());

        [HttpPost("createCity")]
        public async Task<IActionResult> CreateCity([FromBody] City city)
        {
            _cityService.CreateCity(city);
            return Ok();
        }

        [HttpPut("updateCity")]
        public async Task<IActionResult> UpdateCity([FromBody] City city)
        {
            _cityService.UpdateCity(city);
            return Ok();
        }

        [HttpDelete("deleteCity/{name}")]
        public async Task<IActionResult> DeleteUser(string name)
        {
            _cityService.DeleteCity(name);
            return Ok();
        }
    }
}
