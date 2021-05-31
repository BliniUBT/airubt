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
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getUsers")]
        public async Task<IActionResult> GetUsers() => Ok(await _userService.UsersList());

        [HttpPost("createUser")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            _userService.CreateUser(user);
            return Ok();
        }

        [HttpPut("updateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            _userService.UpdateUser(user);
            return Ok();
        }

        [HttpDelete("deleteUser")]
        public async Task<IActionResult> DeleteUser([FromBody] int id) {
            _userService.DeleteUser(id);
            return Ok();
        }
    }
}
