using Crawler.Persistence.EntityConfigurations;

namespace Crawler.Persistence
{
    public class CrawlerDBContext : DbContext
    {
        public CrawlerDBContext(DbContextOptions<CrawlerDBContext> options) : base(options)
        {
        }

        public virtual DbSet<CategoryEntity> Category { get; set; }
        public virtual DbSet<WebsiteEntity> Website { get; set; }
        public virtual DbSet<RootUrlEntity> RootUrl { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CategoryEntityConfiguration());
            modelBuilder.ApplyConfiguration(new WebsiteEntityConfiguration());
            modelBuilder.ApplyConfiguration(new RootUrlEntityConfiguration());
        }
    }
}
