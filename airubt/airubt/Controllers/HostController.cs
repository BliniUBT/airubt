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
        private JwtService _jwtService;

        public HostController(IHostService hostService, JwtService jwtService)
        {
            _hostService = hostService;
            _jwtService = jwtService;
        }

        [HttpGet("getHosts")]
        public async Task<IActionResult> GetHosts() => Ok(await _hostService.HostsList());

        [HttpPost("createHost")]
        public async Task<IActionResult> CreateHost([FromBody] Host host)
        {
            _hostService.CreateHost(host);
            return Ok();
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
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);
                int hostId = int.Parse(token.Issuer);
                var host = _hostService.GetHostById(hostId);
                return Ok(host.Result);
            }
            catch (Exception e)
            {
                return Unauthorized();
            }
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
