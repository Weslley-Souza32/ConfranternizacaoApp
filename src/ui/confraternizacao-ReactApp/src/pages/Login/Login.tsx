import { useState } from "react";
import ContainerComponent from "../../Components/ContainerComponent";
import { Link } from "react-router-dom";
import logo_iasd from "../../assets/logo-iasd-white.svg";

interface IMembroRequest {
  id: number;
  nome: string;
  email: string;
  password: string;
}

const Login = () => {
  const [membroRequest, setMembroRequest] = useState<IMembroRequest>({
    nome: "",
    email: "",
    password: "",
  } as IMembroRequest);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            className={membroRequest.email !== "" ? "has-val input" : "input"}
            type="email"
            name="email"
            value={membroRequest.email}
            onChange={(e) => {
              setMembroRequest({
                ...membroRequest,
                email: e.target.value,
              });
            }}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={
              membroRequest.password !== "" ? "has-val input" : "input"
            }
            type="password"
            name="password"
            value={membroRequest.password}
            onChange={(e) => {
              setMembroRequest({
                ...membroRequest,
                password: e.target.value,
              });
            }}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div className="container-login-form-btn">
          <Link to="/dashboard">
            <button className="login-form-btn">Login</button>
          </Link>
        </div>
        <div className="text-footer">
          <span className="text">Não Possui Conta?</span>
          <Link className="text-link" to="/cadastro">
            Criar Conta
          </Link>
        </div>
      </form>
    </ContainerComponent>
  );
};

export default Login;
