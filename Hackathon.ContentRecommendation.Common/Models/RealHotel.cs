using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hackathon.ContentRecommendation.Common.Models
{
    public class RealHotel
    {
        [JsonPropertyName("countryCode")]
        public string CountryCode { get; set; } = string.Empty;
        [JsonPropertyName("countryName")]
        public string CountryName { get; set; } = string.Empty;
        [JsonPropertyName("cityCode")]
        public int CityCode { get; set; }
        [JsonPropertyName("cityName")] 
        public string CityName { get; set; } = string.Empty;
        [JsonPropertyName("code")]
        public int Code { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;
        [JsonPropertyName("rating")]
        public double Rating { get; set; }
        [JsonPropertyName("address")]
        public string Address { get; set; } = string.Empty;
        //[JsonPropertyName("attractions")]
        //public List<string> Attractions { get; set; } = [];
        [JsonPropertyName("description")]
        public string Description { get; set; } = string.Empty;
        //[JsonPropertyName("facilities")]
        //public string Facilities { get; set; } = string.Empty;
        [JsonPropertyName("lat")]
        public double Lat { get; set; }
        [JsonPropertyName("long")]
        public double Long { get; set; }
        [JsonPropertyName("phoneNumber")]
        public string PhoneNumber { get; set; } = string.Empty;
        [JsonPropertyName("pinCode")]
        public int PinCode { get; set; }
        [JsonPropertyName("websiteUrl")]
        public string WebsiteUrl { get; set; } = string.Empty;
        [JsonPropertyName("imageUrl")]
        public string ImageUrl { get; set; }
        [JsonPropertyName("price")]
        public double Price { get; set; }
    }
}
