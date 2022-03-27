using Crawler.Application.Interfaces;
using Crawler.Domain.Repositories;

namespace Crawler.Application.Services
{
    public class BaseService<TEntity, TResult> : IBaseService<TEntity, TResult> where TEntity : BaseEntity, new()
    {
        protected readonly IBaseRepository<TEntity> _repository;
        protected readonly IMapper _mapper;

        public BaseService(
            IMapper mapper,
            IBaseRepository<TEntity> repository)
        {
            _repository = repository;
            _mapper = mapper;
        }

        #region Query
        public virtual async Task<IEnumerable<TResult>> GetAllAsync()
        {
            var entities = await _repository.GetAllAsync();
            var data = _mapper.Map<IEnumerable<TResult>>(entities);
            return data;
        }
        #endregion Query

        public virtual async Task UpdateAsync(TResult viewModel, params object[] keys)
        {
            var entity = await _repository.GetByKeysAsync(keys);
            _mapper.Map(viewModel, entity);
            _repository.Update(entity);
            await _repository.SaveChangeAsync();
        }

        public virtual async Task UpdateRangeAsync(IEnumerable<TResult> viewModels)
        {
            var entities = _mapper.Map<IEnumerable<TEntity>>(viewModels);
            _repository.UpdateRange(entities);
            await _repository.SaveChangeAsync();
        }
    }
}
