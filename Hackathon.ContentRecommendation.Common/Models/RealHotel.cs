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
        public int HotelCode { get; set; }
        public string HotelName { get; set; } = string.Empty;
        public string HotelRating { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Attractions { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string HotelFacilities { get; set; } = string.Empty;
        public long Map { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public int PinCode { get; set; }
        public string WebsiteUrl { get; set; } = string.Empty;
    }
}
