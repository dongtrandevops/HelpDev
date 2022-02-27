using HelpDev.Persistence.EntityConfigurations;

namespace HelpDev.Persistence
{
    public class HelpDevDBContext : DbContext
    {
        public HelpDevDBContext(DbContextOptions<HelpDevDBContext> options) : base(options)
        {

        }

        public virtual DbSet<MenuEntity> Menu { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new MenuEntityConfiguration());
        }
    }
}
