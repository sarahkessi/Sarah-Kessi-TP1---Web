import React, { useState } from "react";
import "./NouveauProfesseur.css";

function NouveauProfesseur({ ajouterProfesseur }) {
  const [saisieNom, setNom] = useState("");
  const [saisieEmbauche, setEmbauche] = useState("");
  const [saisiePrenom, setPrenom] = useState("");

  function ajoutNouveauProfesseurHandler(event) {
    event.preventDefault(); // Évite d'actualiser la page
    const nouveauProfesseur = {
      id: 10,
      nom: saisieNom,
      prenom: saisiePrenom,
      cours: "Aucun cours",
      embauche: saisieEmbauche,
      image:
        "https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg",
    };

    if (saisieNom === "") {
      alert("Veuillez entrer un nom");
      return;
    }

    if (saisiePrenom === "") {
      alert("Veuillez entrer un prénom");
      return;
    }

    if (saisieEmbauche === "") {
      alert("Veuillez entrer une date");
      return;
    }

    ajouterProfesseur(nouveauProfesseur);
    setNom("");
    setPrenom("");
  }

  function saisieHandler(event) {
    setNom(event.target.value); // La variable saisie prend la valeur de la boîte de texte
  }

  function saisiePrenomHandler(event) {
    setPrenom(event.target.value);
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
          value={saisiePrenom}
          onChange={saisiePrenomHandler}
          placeHolder="Prénom du professeur"
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
