using Crawler.Application.Interfaces;
using Crawler.Domain.Repositories;

namespace Crawler.Application.Services
{
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity : BaseEntity, new()
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
        public async Task<IEnumerable<TResult>> GetAllAsync<TResult>()
        {
            var entities = await _repository.GetAllAsync();
            var data = _mapper.Map<IEnumerable<TResult>>(entities);
            return data;
        }
        #endregion Query
    }
}
