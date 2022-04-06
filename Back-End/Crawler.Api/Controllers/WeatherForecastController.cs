using Microsoft.AspNetCore.Mvc;

namespace Crawler.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"};
        private readonly IWebsiteService _websiteService;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWebsiteService websiteService)
        {
            _logger = logger;
            _websiteService = websiteService;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get([FromQuery] bool error, [FromQuery] string index)
        {
            var weatherForecast = new WeatherForecast();

            if (error)
            {
                _websiteService.TriggerError();
                return null;
            }
            else
            {
                return Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = Random.Shared.Next(-20, 55),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                })
            .ToArray();
            }
        }
    }
}