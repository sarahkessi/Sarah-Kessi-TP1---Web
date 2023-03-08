import React, { useState } from "react";
import "./NouveauProfesseur.css";

function NouveauProfesseur({ ajouterProfesseur }) {
  const [saisieNom, setNom] = useState("");
  const [saisieCours, setCours] = useState(""); // Retourne valriable et pointeur de fonction
  const [saisieEmbauche, setEmbauche] = useState("");

  function ajoutNouveauProfesseurHandler(event) {
    event.preventDefault(); // Évite d'actualiser la page

    if (saisieNom === "") {
      alert("Veuillez entrer un nom complet");
      return;
    }
  }

  function saisieHandler(event) {
    setNom(event.target.value); // La variable saisie prend la valeur de la boîte de texte
  }

  function saisieCours2(event) {
    setCours(event.target.value);
  }

  function saisieDate(event) {
    setEmbauche(event.target.value);
  }

  return (
    <form onSubmit={ajoutNouveauProfesseurHandler}>
      {" "}
      {/*Pointeur de fonction */}
      <div className="div">
      <input
        className="input1"
        type="text"
        onChange={saisieHandler}
        placeHolder="Nom du professeur"
        value={saisieNom}
      />
      {/*Chaque fois que la boîte de texte change, la fonction saisieHandler est appelée*/}
      <input
        className="input2"
        type="text"
        value={saisieCours}
        onChange={saisieCours2}
        placeHolder="Cours donnés"
      />
      <input
      className="input3"
        type="text"
        value={saisieEmbauche}
        onChange={saisieDate}
        placeHolder="Date d'embauche"
      />
      <button className="button" type="submit">
        {" "}
        Ajouter Professeur
      </button>
      </div>
    </form>
  );
}

export default NouveauProfesseur;
