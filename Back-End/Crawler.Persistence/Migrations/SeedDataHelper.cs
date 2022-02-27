using Microsoft.EntityFrameworkCore.Migrations;

namespace Crawler.Persistence.Migrations
{
    public static class SeedDataHelper
    {
        public static void SeedData(this MigrationBuilder migrationBuilder)
        {
            var currentPath = Environment.CurrentDirectory;
            var seedDataPath = Path.Combine(currentPath, "..\\Crawler.Persistence\\Migrations\\Scripts\\SeedData\\");
            string[] filePaths = Directory.GetFiles(seedDataPath);

            foreach (var file in filePaths)
            {
                var sql = File.ReadAllText(file);
                migrationBuilder.Sql(sql);
            }
        }
    }
}
