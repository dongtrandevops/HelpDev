using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Crawler.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;
        private DateTime CacheCurrentDateTime { set; get; }

        public TestController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [HttpGet("cache")]
        public IActionResult Cache()
        {
            var CurrentDateTime = DateTime.Now;

            if (!_memoryCache.TryGetValue("cacheTime", out DateTime cacheValue))
            {
                cacheValue = CurrentDateTime;

                var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromDays(3));

                _memoryCache.Set("cacheTime", cacheValue, cacheEntryOptions);
            }
            CacheCurrentDateTime = cacheValue;
            return Ok(CacheCurrentDateTime);
        }

        [HttpGet("on2")]
        public IActionResult On2()
        {
            var listA = new List<int>();
            for (int i = 0; i < 100000; i++)
            {
                listA.Add(i);
            }

            var listB = new List<int>();
            for (int i = 200000; i > 0; i--)
            {
                listB.Add(i);
            }

            // using list execute time is 2 second
            var result = listA.Where(x => listB.Contains(x)).ToList();

            return Ok(result); 
        }

        [HttpGet("on")]
        public IActionResult On()
        {
            var listA = new List<int>();
            for (int i = 0; i < 100000; i++)
            {
                listA.Add(i);
            }

            var listB = new List<int>();
            for (int i = 200000; i > 0; i--)
            {
                listB.Add(i);
            }


            //// using hashset execute time is 60 millisecond
            var hs = listB.ToHashSet();
            var result2 = listA.Where(x => hs.Contains(x)).ToList();
            return Ok(result2);
        }
    }
}
