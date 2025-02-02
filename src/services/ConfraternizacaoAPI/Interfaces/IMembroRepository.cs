
using ConfraternizacaoAPI.Domain.Membros;

namespace ConfraternizacaoAPI.Interfaces;

public interface IMembroRepository
{
	Task<Membro>CreateByAsync(Membro membro);
	Task<IEnumerable<Membro>> GetAll( );
	Task<Membro> GetByIdAsync(Guid id);
	Task UpdateAsync( Membro membro );
	Task DeleteAsync( Guid id );
	
}
