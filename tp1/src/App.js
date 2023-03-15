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

import ListeCours from "./Cours/ListeCours";
import FormulaireCours from "./Cours/FormulaireCours";

import EtudiantsCours from "./Etudiants/EtudiantsCours";
import NouvelEtudiant from "./Etudiants/NouvelEtudiant";
import ListeEtudiants from "./Etudiants/ListeEtudiants";



function App() {
  const COURS = [
    {
      id: "c1",
      titre: "Web et base de données",
      professeur: "Sarah Kessi",
      discipline: "informatique",
      nbMaxEtudiants: "30",
      dateDebut: new Date(2023, 1, 1),
      dateFin: new Date(2023, 6, 6),
    },
  ];
  
  const [professeurs, setProfesseur] = useState([]);

  const [cours, setCours] = useState([]);

  const [etudiants, setEtudiant] = useState([])

  function ajouterProfesseur(nouveauProfesseur) {
    setProfesseur(() => professeurs.concat(nouveauProfesseur)); // Crée une copie du tableau avec la nouvelle valeur
    //objectifsCours.push(nouvelObjectif);
  }

  function ajouterCours(nouveauCours) {
    setCours(() => cours.concat(nouveauCours));
  }

  function ajouterEtudiant(nouvelEtudiant) {
    setEtudiant(() => etudiants.concat(nouvelEtudiant));
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
          <Route path="/Cours" excat>
            <div>
              <FormulaireCours ajouterCours={ajouterCours} />
              <ListeCours cours={cours} />
            </div>
          </Route>
          <Route path="/:coursId/etudiants" exact>
            <EtudiantsCours />
            <NouvelEtudiant ajouterEtudiant={ajouterEtudiant}/>
            <ListeEtudiants etudiants={etudiants}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
