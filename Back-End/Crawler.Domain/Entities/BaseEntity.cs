

namespace Crawler.Domain.Entities
{
    public class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public DateTime? CreatedDate { set; get; }

        [MaxLength(50)]
        public string CreatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        [MaxLength(50)]
        public string UpdatedBy { get; set; }

        public bool IsActive { set; get; }

        public void Audit(string userName = "System")
        {
            UpdatedDate = DateTime.Now;
            UpdatedBy = userName;
        }
    }
}
