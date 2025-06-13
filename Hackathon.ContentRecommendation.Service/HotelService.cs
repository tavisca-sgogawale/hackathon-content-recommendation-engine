using Hackathon.ContentRecommendation.Common.Models;
using Hackathon.ContentRecommendation.Data;

namespace Hackathon.ContentRecommendation.Service
{
    public class HotelService
    {
        //private readonly IHotelStore _hotelStore;
        //public HotelService(IHotelStore hotelStore)
        //{
        //    _hotelStore = hotelStore;
        //}
        //public List<Hotel> GetFilteredHotels(string? city, double? minPrice, double? maxPrice, double? minRating)
        //{
        //    var hotels = _hotelStore.GetHotels();

        //    var filteredHotels = hotels.Where(h =>
        //    (string.IsNullOrEmpty(city) || h.City.Contains(city, StringComparison.OrdinalIgnoreCase)) &&
        //    (!minPrice.HasValue || h.Price >= minPrice) &&
        //    (!maxPrice.HasValue || h.Price <= maxPrice) &&
        //    (!minRating.HasValue || h.Rating >= minRating)
        //);

        //    return filteredHotels.Take(5).ToList();
        //}

        public List<RealHotel> GetFilteredRealHotels(string? city, double? minPrice, double? maxPrice, double? minRating, string cardType, int size = 15)
        {
            var hotels = HotelFileStore.Hotels;
            var filteredHotels = hotels.Where(h =>
            (string.IsNullOrEmpty(city) || CityMatches(h.CityName, city)) &&
            (string.IsNullOrEmpty(cardType) || h.CardType.Contains(cardType, StringComparison.OrdinalIgnoreCase)) &&
            (!minPrice.HasValue || h.Price >= minPrice) &&
            (!maxPrice.HasValue || h.Price <= maxPrice) &&
            (!minRating.HasValue || h.Rating >= minRating)
        );

            return [.. filteredHotels.Take(size)];
        }

        public List<RealHotel> GetFilteredRealHotels(HotelFilterRequest filterRequest, int pageSize)
        {
            var hotels = HotelFileStore.Hotels;
            var filteredHotels = hotels.Where(h =>
            (string.IsNullOrEmpty(filterRequest.City) || CityMatches(h.CityName, filterRequest.City)) &&
            (!filterRequest.MinPrice.HasValue || h.Price >= filterRequest.MinPrice) &&
            (!filterRequest.MaxPrice.HasValue || h.Price <= filterRequest.MaxPrice) &&
            (!filterRequest.MinRating.HasValue || h.Rating >= filterRequest.MinRating));

            if (filterRequest.Tags != null && filterRequest.Tags.Any())
            {
                return [.. filteredHotels.Where(x => x.Tags != null && x.Tags.Any(t => filterRequest.Tags.Contains(t))).Take(pageSize)];
            }

            return [.. filteredHotels.Take(pageSize)];
        }

        private static bool CityMatches(string hotelCity, string searchCityOrState)
        {
            var hotelParts = hotelCity.ToLower().Replace(",", "").Split(' ');
            var searchCityParts = searchCityOrState.ToLower().Replace(",", "").Split(' ');

            return searchCityParts.All(part => hotelParts.Contains(part));
        }
    }
}
