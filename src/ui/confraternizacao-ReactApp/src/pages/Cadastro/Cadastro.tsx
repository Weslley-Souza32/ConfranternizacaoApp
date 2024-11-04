import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import ContainerComponent from "../../Components/ContainerComponent";
import logo_iasd from "../../assets/logo-iasd-white.svg";

interface IMembro {
  id: number;
  name: string;
  email: string;
  password: string;
}
const Cadastro = () => {
  const [membro, setMembro] = useState<IMembro>({
    name: "",
    email: "",
    password: "",
  } as IMembro);

  const salvar = async (): Promise<void> => {
    try {
      await api.post("/Membro", membro);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    salvar();
  };
  return (
    <ContainerComponent>
      <form onSubmit={handleSubmit} className="login-form">
        <span className="login-form-title">Bem Vindo!</span>
        <span className="login-form-title">
          <img src={logo_iasd} alt="Logo-Iasd" />
        </span>
        <div className="wrap-input">
          <input
            className={membro.name !== "" ? "has-val input" : "input"}
            type="text"
            name="name"
            value={membro.name}
            onChange={({ target }) => {
              setMembro({
                ...membro,
                name: target.value,
              });
            }}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
        <div className="wrap-input">
          <input
            className={membro.email !== "" ? "has-val input" : "input"}
            type="email"
            name="email"
            value={membro.email}
            onChange={({ target }) => {
              setMembro({
                ...membro,
                email: target.value,
              });
            }}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={membro.password !== "" ? "has-val input" : "input"}
            type="password"
            name="password"
            value={membro.password}
            onChange={({ target }) => {
              setMembro({
                ...membro,
                password: target.value,
              });
            }}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div className="container-login-form-btn">
          <Link to={""}>
            <button className="login-form-btn">Cadastrar</button>
          </Link>
        </div>
        <div className="text-footer">
          <span className="text">Já Possui Conta?</span>
          <Link className="text-link" to="/login">
            Entrar Com Email e Senha!
          </Link>
        </div>
      </form>
    </ContainerComponent>
  );
};

export default Cadastro;
