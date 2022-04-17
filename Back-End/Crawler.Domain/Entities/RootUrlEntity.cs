
namespace Crawler.Domain.Entities
{
    public class RootUrlEntity : BaseEntity
    {
        public long? WebsiteId { get; set; }
        public long? CategoryId { get; set; }

        public string Url { get; set; }
        public bool? IsCalculatePage { get; set; }
        public int ItemPerPage { get; set; }
        public string TotalItemCssSelector { get; set; }
        public string TotalItemXPathSelector { get; set; }
        public string KeyLoop { set; get; }
        public string KeyLoop1 { set; get; }
    }
}
