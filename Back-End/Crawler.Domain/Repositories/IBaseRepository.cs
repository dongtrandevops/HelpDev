

using System.Threading.Tasks;

namespace Crawler.Domain.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        #region Query
        Task<TEntity> GetByKeysAsync(params object[] keys);
        Task<IEnumerable<TEntity>> GetAllAsync();
        #endregion Query

        #region Insert

        Task<TEntity> InsertAsync(TEntity entity);
        Task<IEnumerable<TEntity>> InsertRangeAsync(IEnumerable<TEntity> entities);
        #endregion Insert

        #region Update
        void Update(TEntity entity);
        void UpdateRange(IEnumerable<TEntity> entities);

        void Delete(TEntity entity);
        void DeleteRange(IEnumerable<TEntity> entities);
        #endregion Update

        Task<int> SaveChangeAsync();
    }
}
