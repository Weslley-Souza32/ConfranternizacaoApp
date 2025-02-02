using ConfraternizacaoAPI.Domain.Membros;
using ConfraternizacaoAPI.Infra.Data;
using ConfraternizacaoAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ConfraternizacaoAPI.Services;

public class MembroRepository(ApplicationDbContext context) : IMembroRepository
{
	public async Task<Membro> CreateByAsync(Membro membro)
	{
		if (context.Membros.Any(x => x.Id == membro.Id))
			throw new Exception("Membro ja existe na base de dados");

		context.Add(membro);
		await context.SaveChangesAsync();

		return membro;
	}
	
	public async Task DeleteAsync(Guid id)
	{
		var membro = await context.Membros.FindAsync(id);
		if (membro != null)
		{
			context.Membros.Remove(membro);
			await context.SaveChangesAsync();
		}
	}

	public async Task<IEnumerable<Membro>> GetAll() => await context.Membros.ToListAsync();

	public async Task<Membro> GetByIdAsync(Guid id) => await context.Membros.FindAsync(id);

	public async Task UpdateAsync(Membro membro)
	{
		context.Update(membro);
		await context.SaveChangesAsync();
	}
}