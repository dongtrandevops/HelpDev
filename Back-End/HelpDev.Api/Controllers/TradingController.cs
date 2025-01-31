using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace HelpDev.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TradingController : ControllerBase
    {
        [HttpPost("import-history")]
        public IActionResult ImportTradingHistoryAsync(IFormFile file)
        {
            var files = Request.Form.Files;
            return Ok();
        }
    }
}
