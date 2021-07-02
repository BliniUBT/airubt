using airubt.API.Helpers;
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
    public class HostController : ControllerBase
    {
        private IHostService _hostService;
        private IApartmentService _apartmentService;
        private JwtService _jwtService;

        public HostController(IHostService hostService, JwtService jwtService, IApartmentService apartmentService)
        {
            _hostService = hostService;
            _jwtService = jwtService;
            _apartmentService = apartmentService;
        }

        [HttpGet("getHosts")]
        public async Task<IActionResult> GetHosts() => Ok(await _hostService.HostsList());

        [HttpGet("getApartments")]
        public async Task<IActionResult> GetApartments()
        {
            var host = await _hostService.LoggedHost();
            if (host != null)
            {
                return Ok(await _apartmentService.ApartmentsList(host.Id));
            }
            return Unauthorized();
        }

        [HttpPost("createHost")]
        public async Task<IActionResult> CreateHost([FromBody] Host host)
        {
            _hostService.CreateHost(host);
            return Ok();
        }


        [HttpPost("createApartment")]
        public async Task<IActionResult> CreateApartment([FromBody] Apartment _)
        {
            var host = await _hostService.LoggedHost();
            if (host != null)
            {
                _.HostId = host.Id;
                await _apartmentService.CreateApartment(_);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut("updateApartment")]
        public async Task<IActionResult> UpdateApartment([FromBody] Apartment _)
        {
            var host = await _hostService.LoggedHost();
            if (host != null)
            {
                _.HostId = host.Id;
                await _apartmentService.UpdateApartment(_);
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete("deleteApartment/{id}")]
        public async Task<IActionResult> DeleteApartment(int id)
        {
            var host = await _hostService.LoggedHost();
            if (host != null)
            {
                 _apartmentService.DeleteApartment(id);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Host host)
        {
            var result = _hostService.Register(host);
            return Ok(result);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Host host)
        {
            var result = await _hostService.Login(host);
            var jwt = _jwtService.Generate(result.Id);
            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });
            return Ok(new { message = "success" });
        }

        [HttpGet("host")]
        public async Task<IActionResult> Host()
        {
            var host = _hostService.LoggedHost();
            if (host != null)
            {
                return Ok(host.Result);
            }
            return Unauthorized();
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok();
        }


        [HttpPut("updateHost")]
        public async Task<IActionResult> UpdateHost([FromBody] Host host)
        {
            _hostService.UpdateHost(host);
            return Ok();
        }

        [HttpDelete("deleteHost/{id}")]
        public async Task<IActionResult> DeleteHost(int id)
        {
            _hostService.DeleteHost(id);
            return Ok();
        }
    }
}
