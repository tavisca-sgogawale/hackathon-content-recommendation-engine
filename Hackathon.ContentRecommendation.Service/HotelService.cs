using Hackathon.ContentRecommendation.Common.Models;
using Hackathon.ContentRecommendation.Data;

namespace Hackathon.ContentRecommendation.Service
{
    public class HotelService
    {
        private readonly IHotelStore _hotelStore;
        public HotelService(IHotelStore hotelStore)
        {
            _hotelStore = hotelStore;
        }
        public IEnumerable<Hotel> GetFilteredHotels(string? city, double? minPrice, double? maxPrice, double? minRating)
        {
            var hotels = _hotelStore.GetHotels();

            if (!string.IsNullOrEmpty(city))
                hotels = hotels.Where(h => h.City.Equals(city, StringComparison.OrdinalIgnoreCase));

            if (minPrice.HasValue)
                hotels = hotels.Where(h => h.Price >= minPrice.Value);

            if (maxPrice.HasValue)
                hotels = hotels.Where(h => h.Price <= maxPrice.Value);

            if (minRating.HasValue)
                hotels = hotels.Where(h => h.Rating >= minRating.Value);

            return hotels;
        }

        public IEnumerable<RealHotel> GetFilteredRealHotels(string? city, double? minPrice, double? maxPrice, double? minRating)
        {
            var hotels = _hotelStore.GetRealHotels();

            //if (!string.IsNullOrEmpty(city))
            //    hotels = hotels.Where(h => h.City.Equals(city, StringComparison.OrdinalIgnoreCase));

            //if (minPrice.HasValue)
            //    hotels = hotels.Where(h => h.Price >= minPrice.Value);

            //if (maxPrice.HasValue)
            //    hotels = hotels.Where(h => h.Price <= maxPrice.Value);

            //if (minRating.HasValue)
            //    hotels = hotels.Where(h => h.Rating >= minRating.Value);

            return hotels;
        }
    }
}
