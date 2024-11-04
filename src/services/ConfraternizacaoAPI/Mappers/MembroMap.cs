using AutoMapper;
using ConfraternizacaoAPI.Domain.Membros;


namespace ConfraternizacaoAPI.Mappers;

public class MembroMap : Profile
{
	public MembroMap()
	{
		CreateMap<MembroRequest, Membro>().ReverseMap();
		CreateMap<MembroResponse, Membro>().ReverseMap();
						
	}
}
