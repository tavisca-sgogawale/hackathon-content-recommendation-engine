using Hackathon.ContentRecommendation.Common.Models;

namespace Hackathon.ContentRecommendation.Data
{
    public interface IHotelStore
    {
        IEnumerable<Hotel> GetHotels();
    }
}
