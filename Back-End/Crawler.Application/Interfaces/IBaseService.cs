

namespace Crawler.Application.Interfaces
{
    public interface IBaseService<TEntity> where TEntity : BaseEntity, new()
    {
        Task<IEnumerable<TResult>> GetAllAsync<TResult>();
    }
}
