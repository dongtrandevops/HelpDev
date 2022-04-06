
using Crawler.Application.DTOs.Website;

namespace Crawler.Application.Interfaces
{
    public interface IWebsiteService : IBaseService<WebsiteEntity, WebsiteDTO>
    {
        void TriggerError();
    }
}
