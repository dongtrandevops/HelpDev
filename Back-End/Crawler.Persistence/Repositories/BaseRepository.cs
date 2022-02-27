namespace Crawler.Persistence.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly CrawlerDBContext _db;

        public BaseRepository(CrawlerDBContext db)
        {
            _db = db;
        }

        #region Query
        public async Task<TEntity> GetByKeysAsync(params object[] keys)
        {
            return await _db.Set<TEntity>().FindAsync(keys);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _db.Set<TEntity>().ToListAsync();
        }
        #endregion Query

        #region Insert
        public async Task<TEntity> InsertAsync(TEntity entity)
        {
            await _db.AddAsync(entity);
            return entity;
        }

        public async Task<IEnumerable<TEntity>> InsertRangeAsync(IEnumerable<TEntity> entities)
        {
            await _db.AddRangeAsync(entities);
            return entities;
        }
        #endregion Insert

        #region Update
        public void Update(TEntity entity)
        {
            _db.Set<TEntity>().Update(entity);
        }

        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            _db.Set<TEntity>().UpdateRange(entities);
        }

        public void Delete(TEntity entity)
        {
            _db.Set<TEntity>().Remove(entity);
        }

        public void DeleteRange(IEnumerable<TEntity> entities)
        {
            _db.Set<TEntity>().RemoveRange(entities);
        }
        #endregion Update

        public async Task<int> SaveChangeAsync()
        {
            return await _db.SaveChangesAsync();
        }

    }
}
