using ConfraternizacaoAPI.Domain.Membros;
using Microsoft.EntityFrameworkCore;

namespace ConfraternizacaoAPI.Infra.Data;

public class ApplicationDbContext : DbContext
{
	public ApplicationDbContext ( DbContextOptions options ) : base (options)
	{
	}

	public DbSet<Membro> Membros { get; set; }
}
