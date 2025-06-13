using Hackathon.ContentRecommendation.Common.Models;
using System.Reflection;
using System.Text.Json;
using Newtonsoft.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;
using Formatting = Newtonsoft.Json.Formatting;
using Microsoft.VisualBasic;

namespace Hackathon.ContentRecommendation.Data
{
    public static class HotelFileStore
    {
        public static List<RealHotel> Hotels { get; private set; } = new List<RealHotel>();
        private static Dictionary<string, List<string>> TAG_CATEGORIES = new Dictionary<string, List<string>>
        {
            { "business", new List<string> { "business-center", "concierge", "room-service", "wifi", "conference", "laundry", "elevator", "accessible", "quiet", "modern", "financial", "meeting", "corporate", "executive" } },
            { "local", new List<string> { "wifi", "parking", "breakfast", "restaurant", "pet-friendly", "shopping", "nightlife", "budget", "traditional", "downtown", "city center", "mall", "boutique", "b&b", "inn" } },
            { "average", new List<string> { "wifi", "gym", "pool", "breakfast", "restaurant", "balcony", "view", "modern", "family", "accessible", "air-conditioning", "kitchen", "suite", "apartment", "resort", "quiet" } },
            { "premium", new List<string> { "spa", "luxury", "balcony", "view", "air-conditioning", "concierge", "romantic", "suite", "resort", "historic", "elegant", "deluxe", "premium", "upscale", "ocean view", "mountains", "seaside", "honeymoon", "wellness", "massage" } }
        };
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

        private static void InsertImages()
        {
            string[] randomImageUrls = { };
            Random random = new Random();
            foreach (var hotel in Hotels)
            {
                hotel.ImageUrl = randomImageUrls[random.Next(randomImageUrls.Length)];
            }
            string outputFilePath = "updated_hotels.json";
            // Serialize the updated list back to JSON
            string updatedJsonData = JsonConvert.SerializeObject(Hotels, Formatting.Indented);

            // Save the updated JSON back to the file
            File.WriteAllText(outputFilePath, updatedJsonData);
        }

        private static void AddCardType()
        {

            foreach (var hotel in Hotels)
            {
                if (hotel.Rating == 5 && hotel.Price > 2500)
                {
                    hotel.CardType = "Chase Ink";
                }
                if (hotel.Rating == 5 && hotel.Price < 2500)
                {
                    hotel.CardType = "Chase Reserve";
                }
                if (hotel.Rating == 4)
                {
                    hotel.CardType = "Chase Sapphire";
                }
                if (hotel.Rating == 3)
                {
                    hotel.CardType = "Chase Freedom";
                }
            }
                string outputFilePath = "updated_hotels.json";
            // Serialize the updated list back to JSON
            string updatedJsonData = JsonConvert.SerializeObject(Hotels, Formatting.Indented);

            // Save the updated JSON back to the file
            File.WriteAllText(outputFilePath, updatedJsonData);
        }

        public static void AssignTags()
        {
            Random random = new Random();
            foreach (var hotel in Hotels)
            {
                if(hotel.CardType == "Chase Ink")
                {
                    hotel.Tags = TAG_CATEGORIES["business"].Concat(TAG_CATEGORIES["premium"]).ToList().OrderBy(_ => random.Next()).Take(5).ToList();
                }
                if (hotel.CardType == "Chase Freedom")
                {
                    hotel.Tags = TAG_CATEGORIES["local"].OrderBy(_ => random.Next()).Take(5).ToList();
                }
                if (hotel.CardType == "Chase Sapphire")
                {
                    hotel.Tags = TAG_CATEGORIES["average"].OrderBy(_ => random.Next()).Take(5).ToList();
                }
                if (hotel.CardType == "Chase Reserve")
                {
                    hotel.Tags = TAG_CATEGORIES["premium"].OrderBy(_ => random.Next()).Take(5).ToList();
                }
            }
            string outputFilePath = "updated_hotels.json";
            // Serialize the updated list back to JSON
            string updatedJsonData = JsonConvert.SerializeObject(Hotels, Formatting.Indented);

            // Save the updated JSON back to the file
            File.WriteAllText(outputFilePath, updatedJsonData);
        }

    }
}
