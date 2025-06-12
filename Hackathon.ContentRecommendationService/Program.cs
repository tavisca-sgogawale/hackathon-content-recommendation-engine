using Hackathon.ContentRecommendation.Data;
using Hackathon.ContentRecommendation.Service;

var builder = WebApplication.CreateBuilder(args);

// Register services and data access
//builder.Services.AddSingleton<IHotelStore, HotelFileStore>();
builder.Services.AddSingleton<HotelService>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
HotelFileStore.LoadHotels();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
