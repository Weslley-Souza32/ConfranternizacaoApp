using ConfraternizacaoAPI.Domain.Membros;
using ConfraternizacaoAPI.Infra.Data;
using ConfraternizacaoAPI.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace ConfraternizacaoAPI.Services;

public class MembroService : IMembro
{
	private readonly ApplicationDbContext _context;

	public MembroService ( ApplicationDbContext context )
	{
		_context = context;
	}

	public async Task<Membro> CreateByAsync ( Membro membro )
	{
		bool membroExists = _context.Membros.Any (x => x.Id == membro.Id);

		if (membroExists)
			throw new Exception ();

		_context.Add (membro);
		await _context.SaveChangesAsync ();

		return membro;
	}


	public async Task DeleteAsync ( Guid id )
	{
		var membro = await _context.Membros.FindAsync (id);
		if (membro != null)
		{
			_context.Membros.Remove (membro);
			await _context.SaveChangesAsync ();
		}
	}

	public async Task<IEnumerable<Membro>> GetAll ()
	{
		return await _context.Membros.ToListAsync ();
	}

	public async Task<Membro> GetByIdAsync ( Guid id )
	{
		return await _context.Membros.FindAsync (id);
	}

	public async Task UpdateAsync ( Membro membro )
	{

		_context.Update (membro);
		await _context.SaveChangesAsync ();
	}
}
