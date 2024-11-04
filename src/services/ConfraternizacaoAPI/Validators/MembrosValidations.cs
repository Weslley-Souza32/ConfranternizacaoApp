
using ConfraternizacaoAPI.Domain.Membros;
using FluentValidation;

namespace ConfraternizacaoAPI.Validators;

public class MembrosValidations : AbstractValidator<MembroRequest>
{
	public MembrosValidations()
	{
		RuleFor (n => n.Nome)
			.NotEmpty ().WithMessage ("O nome não pode ser nulo ou vazio.")
			.MaximumLength (30).WithMessage ("O nome deve conter no maxímo 30 caracteres.");

		RuleFor (e => e.Email)
			.NotEmpty ().WithMessage ("O E-mail não pode ser nulo ou vazio.")
			.EmailAddress ().WithMessage ("Informe um email com formato válido.");

		RuleFor (p => p.Password)
			.NotEmpty ().WithMessage ("A senha não pode ser nula ou vazia.")
			.MaximumLength (20).WithMessage ("A senha deve conter no máximo 20 caracteres")
			.MinimumLength (6).WithMessage ("A senha deve conter no minímo 6 caracteres");
		

	}
}
