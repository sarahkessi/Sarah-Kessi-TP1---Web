import React, { useState } from "react";
import EtudiantsCours from "./EtudiantsCours";
import ListeEtudiants from "./ListeEtudiants";
import { ETUDIANTS } from "./EtudiantsCours";

function NouvelEtudiant({ ajouterEtudiant }) {
  const [saisieAdmission, setAdmission] = useState("");
  const [saisiePrenom, setPrenom] = useState("");
  const [saisieNom, setNom] = useState("");

  function ajouterNouvelEtudiantfHandler(event) {
      event.preventDefault();
      const nouvelEtudiant = {
        noAdmission: saisieAdmission,
        prenom: saisiePrenom,
        nom: saisieNom,
      };
    

    ajouterEtudiant(nouvelEtudiant);
    //addObj(saisieAdmission);
    setAdmission("");
    setPrenom("");
    setNom("");
  }

  function saisiePrenomHandler(event) {
    setPrenom(event.target.value);
  }

  function saisieNomHandler(event) {
    setNom(event.target.value);
  }

  function saisieAdmissionHandler(event) {
    setAdmission(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouvelEtudiantfHandler}>
      <div>
        <input
          type="number"
          onChange={saisieAdmissionHandler}
          placeHolder="Numéro d'admission"
          value={saisieAdmission}
        />

        <input
          type="text"
          onChange={saisiePrenomHandler}
          placeHolder="Prénom"
          value={saisiePrenom}
        />

        <input
          type="text"
          onChange={saisieNomHandler}
          placeHolder="Nom"
          value={saisieNom}
        />

        <button type="submit">Ajouter Étudiant</button>
      </div>
    </form>
  );
}

export default NouvelEtudiant;
