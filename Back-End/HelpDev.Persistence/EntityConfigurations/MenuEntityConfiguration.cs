
namespace HelpDev.Persistence.EntityConfigurations
{
    public class MenuEntityConfiguration: IEntityTypeConfiguration<MenuEntity>
    {
        public void Configure(EntityTypeBuilder<MenuEntity> builder)
        {
            builder.Property(c => c.Name).HasMaxLength(50).IsRequired();
            builder.Property(c => c.RouterLink).HasMaxLength(50);
            builder.Property(c => c.RouterLinkActive).HasMaxLength(100);
            builder.Property(c => c.MatIcon).HasMaxLength(20);
        }
    }
}
