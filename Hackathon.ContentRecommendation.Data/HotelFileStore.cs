using Hackathon.ContentRecommendation.Common.Models;
using System.Reflection;
using System.Text.Json;
using Newtonsoft.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;
using Formatting = Newtonsoft.Json.Formatting;

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

        private static void AddTags()
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

    }
}
