
namespace HelpDev.Domain.Entities
{
    public class MenuEntity : BaseEntity
    {
        public string Name { get; set; }
        public string RouterLink { get; set; }
        public string RouterLinkActive { get; set; }
        public string MatIcon { get; set; }
        public long? ParentId { get; set; }
        public int? Order { get; set; }
    }
}
