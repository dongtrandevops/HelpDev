
using Crawler.Application.DTOs.Category;

namespace Crawler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IBaseService<CategoryEntity, CategoryDTO> _categoryService;

        public CategoriesController(IBaseService<CategoryEntity, CategoryDTO> categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _categoryService.GetAllAsync();
            return Ok(result);
        }
    }
}
