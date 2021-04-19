import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Inicio from "../pages/Inicio";
import Perfil from "../pages/Perfil";
import Experiencia from "../pages/Experiencia";
import Habilidades from "../pages/Habilidades";
import Proyectos from "../pages/Proyectos";
import Contacto from "../pages/Contacto";
import PageNoExiste from "../pages/PageNoExiste";

//con BABEL
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/perfil" component={Perfil} />
      <Route exact path="/experiencia" component={Experiencia} />
      <Route exact path="/habilidades" component={Habilidades} />
      <Route exact path="/proyectos" component={Proyectos} />
      <Route exact path="/contacto" component={Contacto} />
      <Route component={PageNoExiste} />
    </Switch>
  </BrowserRouter>
);

export default App;
