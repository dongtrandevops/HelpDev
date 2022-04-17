using Crawler.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Persistence.EntityConfigurations
{
    public class RootUrlEntityConfiguration : IEntityTypeConfiguration<RootUrlEntity>
    {
        public void Configure(EntityTypeBuilder<RootUrlEntity> builder)
        {
            builder.Property(c => c.Url).HasMaxLength(250).IsRequired();
        }
    }
}
