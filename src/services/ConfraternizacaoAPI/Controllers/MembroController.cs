using AutoMapper;
using ConfraternizacaoAPI.Domain.Membros;
using ConfraternizacaoAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ConfraternizacaoAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class MembroController(IMembro service, IMapper mapper) : ControllerBase
{
	[HttpGet]
	public async Task<IActionResult> Listar()
	{
		var membros = await service.GetAll();
		var membrosMap = mapper.Map<IEnumerable<MembroResponse>>(membros);
		return Ok(membrosMap);
	}

	[HttpGet("{id:guid}")]
	public async Task<IActionResult> ListarPorId(Guid id)
	{
		var membro = await service.GetByIdAsync(id);
		if (membro == null)
			return NotFound();

		return Ok(mapper.Map<MembroResponse>(membro));
	}

	[HttpPost]
	public async Task<IActionResult> CriarMembro([FromBody] MembroRequest membro) => 
		Ok(await service.CreateByAsync(mapper.Map<Membro>(membro)));

	[HttpPut("{id:guid}")]
	public async Task<IActionResult> Atualizar(Guid id, Membro membro)
	{
		if (id != membro.Id)
			return BadRequest();
		await service.UpdateAsync(membro);
		
		return Ok();
	}

	[HttpDelete("{id:guid}")]
	public async Task<IActionResult> Deletar(Guid id)
	{
		await service.DeleteAsync(id);
		return NoContent();
	}
}