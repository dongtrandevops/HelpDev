using Crawler.Application.DTOs.Category;
using Crawler.Application.DTOs.Website;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Application.AutoMapperProfile
{
    public class CategoryMappingProfile : Profile
    {
        public CategoryMappingProfile()
        {
            CreateMap<CategoryEntity, CategoryDTO>().ReverseMap();
        }
    }
}
