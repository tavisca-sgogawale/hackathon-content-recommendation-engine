using Hackathon.ContentRecommendation.Common.Models;
using System.Reflection;
using System.Text.Json;

namespace Hackathon.ContentRecommendation.Data
{
    public class HotelFileStore : IHotelStore
    {
        private readonly string _jsonFilePath;
        public HotelFileStore()
        {
            var basePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            _jsonFilePath = Path.Combine(basePath!, "Data", "hotels.json");
        }

        public IEnumerable<Hotel> GetHotels()
        {
            var json = File.ReadAllText(_jsonFilePath);

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = true
            };
            return JsonSerializer.Deserialize<List<Hotel>>(json, options) ?? new List<Hotel>();
        }
    }
}
