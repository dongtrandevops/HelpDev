
namespace Crawler.Domain.Entities
{
    public class WebsiteEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Img { get; set; }
        public int? Order { get; set; }

        public string RequestHeaderAccept { get; set; }
        public string RequestHeaderAcceptEncoding { get; set; }
        public string RequestHeaderAcceptLanguage { get; set; }
        public string RequestHeaderUserAgent { get; set; }
        public string RequestHeaderCookie { get; set; }
    }
}
