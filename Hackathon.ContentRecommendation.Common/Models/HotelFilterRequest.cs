using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hackathon.ContentRecommendation.Common.Models
{
    public class HotelFilterRequest
    {
        public string? City { get; set; }
        public string? CardType { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public double? MinRating { get; set; }
        public List<string>? Tags { get; set; }
        public int PageSize { get; set; } = 5;
    }
}
