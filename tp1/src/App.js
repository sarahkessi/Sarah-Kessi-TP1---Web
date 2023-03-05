import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Accueil from "./Page Accueil/Accueil";
import Professeurs from "./Professeur/pages/Professeurs"
import MainNavigation from "./shared/Navigation/MainNavigation";

import "./Page Accueil/Accueil.css";


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
          <Route path="/">
            <Accueil />
          </Route>
          <Route path="/Professeurs" exact>
            <Professeurs />
          </Route>
          <Redirect to="/" />
          </Switch>
          </main>
    </Router>
  );
}

export default App;
