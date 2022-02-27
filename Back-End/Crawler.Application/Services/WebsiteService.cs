using Crawler.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Application.Services
{
    public class WebsiteService : BaseService<WebsiteEntity>, IWebsiteService
    {
        public WebsiteService(IMapper mapper, IWebsiteRepository repository) : base(mapper, repository)
        {
        }
    }
}
