using Hackathon.ContentRecommendation.Common.Models;

namespace Hackathon.ContentRecommendation.Data
{
    public interface IHotelStore
    {
        List<Hotel> GetHotels();
        List<RealHotel> GetRealHotels();
    }
}
