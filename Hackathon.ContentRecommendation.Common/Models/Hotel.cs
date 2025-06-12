namespace Hackathon.ContentRecommendation.Common.Models
{
    [Serializable]
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public double Price { get; set; }
        public double Rating { get; set; }
    }
}
