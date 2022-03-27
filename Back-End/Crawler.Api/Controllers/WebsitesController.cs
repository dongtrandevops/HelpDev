
using Crawler.Application.DTOs.Website;

namespace Crawler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsitesController : ControllerBase
    {
        private readonly IWebsiteService _websiteService;

        public WebsitesController(
            IWebsiteService websiteService
            )
        {
            _websiteService = websiteService;
        }

        [HttpGet()]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _websiteService.GetAllAsync();
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(long id, WebsiteDTO viewModel)
        {
            await _websiteService.UpdateAsync(viewModel, id);
            return Ok();
        }

        [HttpPut()]
        public async Task<IActionResult> UpdateRangeAsync(IEnumerable<WebsiteDTO> viewModels)
        {
            await _websiteService.UpdateRangeAsync(viewModels);
            return Ok();
        }
    }
}
