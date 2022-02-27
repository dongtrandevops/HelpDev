using Crawler.Application.DTOs.Website;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Application.AutoMapperProfile
{
    public class WebsiteMappingProfile : Profile
    {
        public WebsiteMappingProfile()
        {
            CreateMap<WebsiteEntity, WebsiteDTO>();
        }
    }
}
