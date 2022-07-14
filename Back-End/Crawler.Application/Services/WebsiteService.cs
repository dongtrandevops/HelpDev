using Crawler.Application.DTOs.Website;
using Crawler.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Application.Services
{
    public class WebsiteService : BaseService<WebsiteEntity, WebsiteDTO>, IWebsiteService
    {
        private readonly IWebsiteRepository _websiteRepository;
        public WebsiteService(IMapper mapper, IWebsiteRepository repository) : base(mapper, repository)
        {
            _websiteRepository = repository;
        }

        public void TriggerError()
        {
            var data = new WebsiteEntity();
            data.Name.Trim();
        }

        public async Task<IEnumerable<WebsiteEntity>> UnitTestAsync()
        {
            var ids = new List<long>() { 1, 2, 3, 4 };
            var data = await _websiteRepository.GetListAsync(ids);
            return data;
        }
    }
}
