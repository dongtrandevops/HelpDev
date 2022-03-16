
namespace Crawler.Application
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services)
        {
            ////Application
            services.AddTransient(typeof(IBaseService<,>), typeof(BaseService<,>));
            services.AddTransient<IWebsiteService, WebsiteService>();

            ////Crawler
            //services.AddTransient<IDownloaderService, DownloaderService>();
            //services.AddTransient<IGenerateHtmlDocumentService, GenerateHtmlDocumentService>();
            //services.AddTransient<ICalculatePageService, CalculatePageService>();


            //services.AddTransient(typeof(IParserService<,>), typeof(ParserService<,>));
            //services.AddTransient(typeof(ICrawlerService<,>), typeof(CrawlerService<,>));

            return services;
        }

        public static void AddConfigMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(
                typeof(WebsiteMappingProfile)
                );
        }
    }
}
