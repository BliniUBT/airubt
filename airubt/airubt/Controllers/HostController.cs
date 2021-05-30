using airubt.Application.Interfaces;
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

        public HostController(IHostService hostService)
        {
            _hostService = hostService;
        }

        [HttpGet("getHosts")]
        public async Task<IActionResult> GetHosts() => Ok(await _hostService.HostList());
        [HttpPost("createHost")]
        public async Task<IActionResult> CreateHost([FromBody] Host user)
        {
            _userService.CreateUser(user);
            return Ok();
        }
    }
}
