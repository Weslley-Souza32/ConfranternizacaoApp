using Carter;
using ConfraternizacaoAPI.Infra.Data;
using ConfraternizacaoAPI.Interfaces;
using ConfraternizacaoAPI.Mappers;
using ConfraternizacaoAPI.Services;
using ConfraternizacaoAPI.Validators;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDbContext>(opt => { opt.UseInMemoryDatabase("confraternizacao"); });

builder.Services.AddCarter()
	.AddFluentValidation(config => 
		config.RegisterValidatorsFromAssemblyContaining<MembrosValidations>());

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(MembroMap));

//cors
string CorsDefaultName = "CorsPolicy";
builder.Services.AddCors(options =>
{
	options.AddPolicy(name: CorsDefaultName,
		builder =>
		{
			builder.AllowAnyOrigin();
			builder.AllowAnyHeader();
			builder.AllowAnyMethod();
		});
});

builder.Services.AddScoped<IMembroRepository, MembroRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

//configura??o cors
app.UseCors(CorsDefaultName);

app.UseHttpsRedirection();

app.MapCarter();

app.Run();