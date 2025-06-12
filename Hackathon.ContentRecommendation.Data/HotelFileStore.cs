using Hackathon.ContentRecommendation.Common.Models;
using System.Reflection;
using System.Text.Json;

namespace Hackathon.ContentRecommendation.Data
{
    public static class HotelFileStore
    {
        public static List<RealHotel> Hotels { get; private set; } = new List<RealHotel>();
        public static void LoadHotels()
        {
            var basePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var _jsonHotelsFilePath = Path.Combine(basePath!, "Data", "hotels.json");
            var _jsonRealHotelsFilePath = Path.Combine(basePath!, "Data", "real_hotels.json");
            var json = File.ReadAllText(_jsonRealHotelsFilePath);

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = true
            };
            Hotels = JsonSerializer.Deserialize<List<RealHotel>>(json, options) ?? new List<RealHotel>();
        }
    }
}
