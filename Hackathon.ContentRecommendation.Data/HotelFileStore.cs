using Hackathon.ContentRecommendation.Common.Models;
using System.Reflection;
using System.Text.Json;

namespace Hackathon.ContentRecommendation.Data
{
    public class HotelFileStore : IHotelStore
    {
        private readonly string _jsonHotelsFilePath;
        private readonly string _jsonRealHotelsFilePath;
        public HotelFileStore()
        {
            var basePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            _jsonHotelsFilePath = Path.Combine(basePath!, "Data", "hotels.json");
            _jsonRealHotelsFilePath = Path.Combine(basePath!, "Data", "real_hotels.json");
        }

        public IEnumerable<Hotel> GetHotels()
        {
            var json = File.ReadAllText(_jsonHotelsFilePath);

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = true
            };
            return JsonSerializer.Deserialize<List<Hotel>>(json, options) ?? new List<Hotel>();
        }

        public IEnumerable<RealHotel> GetRealHotels()
        {
            var json = File.ReadAllText(_jsonRealHotelsFilePath);

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = true
            };
            return JsonSerializer.Deserialize<List<RealHotel>>(json, options) ?? new List<RealHotel>();
        }
    }
}
