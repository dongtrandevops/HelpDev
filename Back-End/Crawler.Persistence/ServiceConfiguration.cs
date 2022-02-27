
using Crawler.Persistence.Repositories;


namespace Crawler.Persistence
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection AddPersistenceService(this IServiceCollection services)
        {
            //services.AddScoped<IUnitOfWork, Crawler2DbContext>();
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped<IWebsiteRepository, WebsiteRepository>();

            return services;
        }
    }
}
