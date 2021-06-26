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
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private JwtService _jwtService;
        
        public UserController(IUserService userService, JwtService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpGet("getUsers")]
        public async Task<IActionResult> GetUsers() => Ok(await _userService.UsersList());

        [HttpPost("createUser")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            _userService.CreateUser(user);
            return Ok();
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var result = _userService.Register(user);
            return Ok(result);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var result = await _userService.Login(user);
            var jwt = _jwtService.Generate(result.Id);
            Response.Cookies.Append("jwt", jwt, new CookieOptions { 
                HttpOnly = true
            });
            return Ok(new { message = "success" });
        }

        [HttpGet("user")]
        public async Task<IActionResult> User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);
                int userId = int.Parse(token.Issuer);
                var user = _userService.GetUserById(userId);
                return Ok(user.Result);
            }catch(Exception e)
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

        [HttpPut("updateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            var result = await _userService.UpdateUser(user);
            return Ok(result);
        }

        [HttpDelete("deleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id) {
            _userService.DeleteUser(id);
            return Ok();
        }
    }
}
