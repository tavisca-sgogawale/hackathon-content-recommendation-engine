using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hackathon.ContentRecommendation.Common.Models
{
    [Serializable]
    public class RealHotel
    {
        public string CountryCode { get; set; } = string.Empty;
        public string CountryName { get; set; } = string.Empty;
        public int CityCode { get; set; }
        public string CityName { get; set; } = string.Empty;
        public int Code { get; set; }
        public string Name { get; set; } = string.Empty;
        public double Rating { get; set; }
        public string Address { get; set; } = string.Empty;
        //public List<string> Attractions { get; set; } = [];
        public string Description { get; set; } = string.Empty;
        //public string Facilities { get; set; } = string.Empty;
        public double Lat { get; set; }
        public double Long { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public int PinCode { get; set; }
        public string WebsiteUrl { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public double Price { get; set; }
        public string CardType { get; set; } = string.Empty;
        public List<string>? Tags { get; set; } = [];
    }
}
