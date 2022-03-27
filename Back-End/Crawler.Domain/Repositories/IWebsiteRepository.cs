
namespace Crawler.Domain.Repositories
{
    public interface IWebsiteRepository : IBaseRepository<WebsiteEntity>
    {
        Task<IEnumerable<WebsiteEntity>> GetListAsync(IEnumerable<long> ids);
    }
}
