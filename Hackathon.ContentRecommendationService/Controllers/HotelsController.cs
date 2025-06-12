using Hackathon.ContentRecommendation.Service;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.ContentRecommendation.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly HotelService _hotelService;
        public HotelsController(HotelService hotelService)
        {
            _hotelService = hotelService;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string? city, [FromQuery] double? minPrice, [FromQuery] double? maxPrice, [FromQuery] double? minRating)
        {
            var hotels = _hotelService.GetFilteredRealHotels(city, minPrice, maxPrice, minRating);
            //var hotels = _hotelService.GetFilteredHotels(city, minPrice, maxPrice, minRating);
            return Ok(hotels);
        }

        //[HttpGet]
        //public IActionResult Get([FromQuery] string? city, [FromQuery] double? minPrice, [FromQuery] double? maxPrice, [FromQuery] double? minRating)
        //{
        //    var hotels = _hotelService.GetFilteredRealHotels(city, minPrice, maxPrice, minRating);
        //    return Ok(hotels);
        //}
    }
}
