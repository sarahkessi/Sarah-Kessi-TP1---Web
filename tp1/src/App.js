import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Accueil from "./Page Accueil/Accueil";
import Professeurs from "./Professeur/pages/Professeurs";
import MainNavigation from "./shared/Navigation/MainNavigation";
import NouveauProfesseur from "./Professeur/components/NouveauProfesseur";
import ListeProfesseurs from "./Professeur/components/ListeProfesseurs";

function App() {

  const [professeurs, setProfesseur] = useState([
    {
      id: "cg1",
      nom: "Sarah Kessi",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/styles/researcher_17_20_desktop/public/guy-pare_5.jpeg?itok=X85zRA1v",
      cours: "Web et base de données",
      embauche: "5 mars 2023",
    },
  ]);

  function ajouterProfesseur(nouveauProfesseur) {
    setProfesseur(() => professeurs.concat(nouveauProfesseur)); // Crée une copie du tableau avec la nouvelle valeur
    //objectifsCours.push(nouvelObjectif);
  }
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil />
          </Route>
          <Route path="/Professeurs" exact>
            <div>
            <Professeurs />
            <NouveauProfesseur ajouterProfesseur={ajouterProfesseur} />
            <ListeProfesseurs professeurs={professeurs} />
            </div>        
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
