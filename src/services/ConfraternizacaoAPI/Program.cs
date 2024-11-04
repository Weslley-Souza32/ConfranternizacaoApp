using ConfraternizacaoAPI.Infra.Data;
using ConfraternizacaoAPI.Interfaces;
using ConfraternizacaoAPI.Mappers;
using ConfraternizacaoAPI.Services;
using ConfraternizacaoAPI.Validators;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder (args);
builder.Services.AddSqlServer<ApplicationDbContext> (builder.Configuration["ConnectionStrings:DefaultConnection"]);


builder.Services.AddControllers ()
	.AddFluentValidation (config => config.RegisterValidatorsFromAssemblyContaining<MembrosValidations> ());
builder.Services.AddEndpointsApiExplorer ();
builder.Services.AddSwaggerGen ();
builder.Services.AddAutoMapper (typeof (MembroMap));

//cors
string CorsDefaultName = "CorsPolicy";
builder.Services.AddCors (options =>
{
	options.AddPolicy (name: CorsDefaultName,
										builder =>
										{
											builder.AllowAnyOrigin ();
											builder.AllowAnyHeader ();
											builder.AllowAnyMethod ();
										});
});



//Injeção de Dependência
builder.Services.AddScoped<IMembro, MembroService> ();

var app = builder.Build ();

if (app.Environment.IsDevelopment ())
{
    app.UseSwagger ();
    app.UseSwaggerUI ();
}

//configuração cors
app.UseCors (CorsDefaultName);

app.UseHttpsRedirection ();

app.UseAuthorization ();

app.MapControllers ();

app.Run ();
