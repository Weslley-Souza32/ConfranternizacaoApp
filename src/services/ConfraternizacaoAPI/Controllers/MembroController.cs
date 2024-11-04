using AutoMapper;
using ConfraternizacaoAPI.Domain.Membros;
using ConfraternizacaoAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ConfraternizacaoAPI.Controllers;
[Route ("api/[controller]")]
[ApiController]
public class MembroController : ControllerBase
{
	private readonly IMembro _membro;
	private readonly IMapper _mapper;

	public MembroController ( IMembro membro, IMapper mapper )
	{
		_membro = membro;
		_mapper = mapper;
	}

	[HttpGet]
	public async Task<IActionResult> Listar()
	{
		var membros = await _membro.GetAll ();
		var membrosMap = _mapper.Map<IEnumerable<MembroResponse>> (membros);
		return Ok (membrosMap);
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> ListarPorId(Guid id )
	{
		var membro = await _membro.GetByIdAsync (id);
		var membroMap = _mapper.Map<MembroResponse> (membro);
		if (membro == null)
			return NotFound ();

		return Ok(membroMap);
	}

	[HttpPost]
	public async Task<IActionResult> CriarMembro ( [FromBody] MembroRequest membro )
	{
		var novoMembro = _mapper.Map<Membro> (membro);
		await _membro.CreateByAsync (novoMembro);
		return Ok(novoMembro);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> Atualizar(Guid id ,Membro membro )
	{
		if (id != membro.Id)
		{
			return BadRequest ();
		}
		await _membro.UpdateAsync (membro);
		return Ok();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Deletar(Guid id )
	{
		await _membro.DeleteAsync (id);
		return NoContent();
	}
}
