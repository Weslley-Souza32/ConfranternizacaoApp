using AutoMapper;
using Carter;
using ConfraternizacaoAPI.Domain.Membros;
using ConfraternizacaoAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ConfraternizacaoAPI.Modules;

public class MembroModule : CarterModule
{
	public override void AddRoutes(IEndpointRouteBuilder app)
	{
		var membro = app.MapGroup("membro");
		membro.MapGet("", Listar);
		membro.MapGet("{id:guid}", Obter);
		membro.MapPost("", CriarMembro);
		membro.MapPut("{id:guid}", Atualizar);
		membro.MapDelete("{id:guid}", Deletar);
	}
	[EndpointDescription("Listar Todos os Membros")]
	[ProducesResponseType<List<Membro>>(200)]
	private async Task<IResult> Listar(IMembroRepository repository, IMapper mapper)
	{
		var membros = await repository.GetAll();
		var membrosMap = mapper.Map<IEnumerable<MembroResponse>>(membros);
		return Results.Ok(membrosMap);
	}

	[EndpointDescription("Obter Membro por ID")]
	[ProducesResponseType<Membro>(200)]
	private async Task<IResult> Obter(Guid id, IMembroRepository repository, IMapper mapper)
	{
		var membro = await repository.GetByIdAsync(id);
		if (membro == null)
			return Results.NotFound();

		return Results.Ok(mapper.Map<MembroResponse>(membro));
	}
	[EndpointDescription("Inserir Membro")]
	private async Task<IResult> CriarMembro(MembroRequest membro, IMembroRepository repository, IMapper mapper) => 
		Results.Ok(await repository.CreateByAsync(mapper.Map<Membro>(membro)));
	[EndpointDescription("Atualizar Membro")]
	private async Task<IResult> Atualizar(Guid id, Membro membro, IMembroRepository repository, IMapper mapper)
	{
		if (id != membro.Id)
			return Results.BadRequest();
		
		await repository.UpdateAsync(membro);
		return Results.Ok();
	}
	[EndpointDescription("Excluir Membro")]
	private async Task<IResult> Deletar(Guid id, IMembroRepository repository, IMapper mapper)
	{
		await repository.DeleteAsync(id);
		return Results.NoContent();
	}
}