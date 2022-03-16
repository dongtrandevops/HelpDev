

namespace Crawler.Application.Interfaces
{
    public interface IBaseService<TEntity, TResult> where TEntity : BaseEntity, new()
    {
        Task<IEnumerable<TResult>> GetAllAsync();
        Task UpdateAsync(TResult viewModel, params object[] keys);
    }
}
