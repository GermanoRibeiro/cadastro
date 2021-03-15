import React, { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";
import TarefaContext from './contexts/TarefaContext';

function Routes(): ReactElement {
  return (
   
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/cadastrar-tarefas" component={Cadastro} />
        <Route path="/tarefas" component={Listar} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
   
  );
}

export default Routes;
