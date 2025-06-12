using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hackathon.ContentRecommendation.Common.Models
{
    public class RealHotel
    {
        public string CountryCode { get; set; } = string.Empty;
        public string CountryName { get; set; } = string.Empty;
        public int CityCode { get; set; }
        public string CityName { get; set; } = string.Empty;
        public int Code { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Rating { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public List<string> Attractions { get; set; } = [];
        public string Description { get; set; } = string.Empty;
        public string Facilities { get; set; } = string.Empty;
        public long Lat { get; set; }
        public long Long { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public int PinCode { get; set; }
        public string WebsiteUrl { get; set; } = string.Empty;
        public string ImageUrl { get; set; }
    }
}
