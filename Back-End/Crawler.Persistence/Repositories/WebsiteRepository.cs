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
            }).OrderBy(c => c.Order).ToListAsync();
            return websites;
        }

        public async Task<IEnumerable<WebsiteEntity>> GetListAsync(IEnumerable<long> ids)
        {
            var websites = await _db.Website.Where(c => ids.Contains(c.Id)).ToListAsync();
            return websites;
        }
    }
}
