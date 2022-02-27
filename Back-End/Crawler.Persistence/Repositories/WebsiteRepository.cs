using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Persistence.Repositories
{
    public class WebsiteRepository : BaseRepository<WebsiteEntity>, IWebsiteRepository
    {
        public WebsiteRepository(CrawlerDBContext db) : base(db)
        {
        }

        public override async Task<IEnumerable<WebsiteEntity>> GetAllAsync()
        {
            var websites = await _db.Website.Select(c => new WebsiteEntity
            {
                Id = c.Id,
                Url = c.Url,
                Name = c.Name,
                RequestHeaderCookie = c.RequestHeaderCookie,
                Order = c.Order
            }).ToListAsync();
            return websites;
        }
    }
}
