﻿
namespace ConfraternizacaoAPI.Domain.Membros;

public class Membro
{
	public Guid Id { get; set; } = Guid.NewGuid();
	public string Nome { get; set; }
	public string Email { get; set; }
	public string Password { get; set; }
}
