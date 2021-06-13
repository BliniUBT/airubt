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
    public class AdminController : ControllerBase
    {
        private IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet("getAdmins")]
        public async Task<IActionResult> GetAdmins() => Ok(await _adminService.AdminsList());

        [HttpPost("createAdmin")]
        public async Task<IActionResult> CreateAdmin([FromBody] Admin admin)
        {
            _adminService.CreateAdmin(admin);
            return Ok();
        }

        [HttpPut("updateAdmin")]
        public async Task<IActionResult> UpdateAdmin([FromBody] Admin admin)
        {
            _adminService.UpdateAdmin(admin);
            return Ok();
        }

        [HttpDelete("deleteAdmin/{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            _adminService.DeleteAdmin(id);
            return Ok();
        }
    }
}
