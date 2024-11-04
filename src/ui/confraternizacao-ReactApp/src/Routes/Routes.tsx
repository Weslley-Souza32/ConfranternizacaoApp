import {
  BrowserRouter as Router,
  Routes as Routers,
  Route,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import { CadastroConfraternizacao } from "../pages/Cadastro/CadastroConfraternizacao";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Igreja } from "../pages/Cadastro/Igreja";

const Routes = () => {
  return (
    <Router>
      <Routers>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/igreja" element={<Igreja />} />
        <Route
          path="/confraternizacao"
          element={<CadastroConfraternizacao />}
        />
      </Routers>
    </Router>
  );
};

export default Routes;
