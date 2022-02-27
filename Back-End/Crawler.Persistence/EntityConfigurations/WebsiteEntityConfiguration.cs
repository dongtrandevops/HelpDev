using Crawler.Domain.Entities;
using HelpDev.Common.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Persistence.EntityConfigurations
{
    public class WebsiteEntityConfiguration : IEntityTypeConfiguration<WebsiteEntity>
    {
        public void Configure(EntityTypeBuilder<WebsiteEntity> builder)
        {
            builder.Property(c => c.Name).HasMaxLength(50).IsRequired();
            builder.Property(c => c.Url).HasMaxLength(50).IsRequired();
            //builder.Property(c => c.IsActive).HasDefaultValue(true);
            builder.Property(c => c.RequestHeaderAccept).HasMaxLength(50).HasDefaultValue(HttpRequestHeaderValue.Accept);
            builder.Property(c => c.RequestHeaderAcceptEncoding).HasMaxLength(50).HasDefaultValue(HttpRequestHeaderValue.AcceptEncoding);
            builder.Property(c => c.RequestHeaderAcceptLanguage).HasMaxLength(512).HasDefaultValue(HttpRequestHeaderValue.AcceptLanguage);
            builder.Property(c => c.RequestHeaderUserAgent).HasMaxLength(512).HasDefaultValue(HttpRequestHeaderValue.UserAgent);
        }
    }
}
