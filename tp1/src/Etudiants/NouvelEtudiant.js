import React, { useState } from "react";

import { ETUDIANTS } from "./EtudiantsCours";

import "./NouvelEtudiant.css";
function NouvelEtudiant({ ajouterEtudiant }) {
  const [saisieAdmission, setAdmission] = useState("");
  const [saisiePrenom, setPrenom] = useState("");
  const [saisieNom, setNom] = useState("");

  function ajouterNouvelEtudiantHandler(event) {
    event.preventDefault();
    const nouvelEtudiant = {
      noAdmission: saisieAdmission,
      prenom: saisiePrenom,
      nom: saisieNom,
    };

    

    if (saisieNom === "") {
      alert("Veuillez entrer un nom");
      return;
    }

    if (saisiePrenom === "") {
      alert("Veuillez entrer un prénom");
      return;
    }

    if (saisieAdmission === "") {
      alert("Veuillez entrer un numéro d'admission");
      return;
    }

  
    if (ETUDIANTS.some(etudiant => etudiant.noAdmission === saisieAdmission)) {
     alert("Cet étudiant est déjà inscrit");
      return;
    }

    ajouterEtudiant(nouvelEtudiant); 
    ETUDIANTS.push(nouvelEtudiant);
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
    <form onSubmit={ajouterNouvelEtudiantHandler}>
      <div className="wrapper">
        <input
          className="input1"
          type="text"
          onChange={saisieAdmissionHandler}
          placeHolder="Numéro d'admission"
          value={saisieAdmission}
        />

        <input
          className="input2"
          type="text"
          onChange={saisiePrenomHandler}
          placeHolder="Prénom"
          value={saisiePrenom}
        />

        <input
          className="input2"
          type="text"
          onChange={saisieNomHandler}
          placeHolder="Nom"
          value={saisieNom}
        />

        <button  className="buttonEleve" type="submit">
          Ajouter Étudiant
        </button>
      </div>
    </form>
  );
}

export default NouvelEtudiant;
