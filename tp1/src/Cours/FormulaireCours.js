import React, { useState } from "react";
import Professeur from "../Professeur/components/Professeur";
import Professeurs from "../Professeur/pages/Professeurs";
import App from "../App";
import ListeProfesseurs from "../Professeur/components/ListeProfesseurs";

import "./FormulaireCours.css";

function FormulaireCours({ ajouterCours }) {
  const [saisieTitre, setSaisieTitre] = useState("");
  const [saisieProfesseur, setSaisieProfesseur] = useState("");
  const [saisieDateDebut, setSaisieDateDebut] = useState("");
  const [saisieDateFin, setSaisieDateFin] = useState("");

  function ajoutCoursHandler(event) {
    event.preventDefault();
    const nouveauCours = {
      id: "c1",
      titre: saisieTitre,
      professeur: saisieProfesseur,
      discipline: "Informatique",
      dateDebut: new Date(saisieDateDebut),
      dateFin: new Date(saisieDateFin),
      nbEtudiants: 0,
    };

    ajouterCours(nouveauCours);
    setSaisieTitre("");
    setSaisieProfesseur("");
    setSaisieDateDebut("");
    setSaisieDateFin("");
  }
  function changementTitreHandler(event) {
    setSaisieTitre(event.target.value);
  }

  function changementProfesseurHandler(event) {
    setSaisieProfesseur(event.target.value);
  }

  function changementDateDebutHandler(event) {
    setSaisieDateDebut(event.target.value);
  }

  function changementDateFinHandler(event) {
    setSaisieDateFin(event.target.value);
  }

  return (
    <form onSubmit={ajoutCoursHandler}>
      <div className="div">
        <div className="div2">
          <label className="label1">Cours</label>
          <input
            className="input1"
            type="text"
            value={saisieTitre}
            placeholder="Cours"
            onChange={changementTitreHandler}
          />

          <label>Professeur</label>
          <input
            className="input2"
            type="text"
            value={saisieProfesseur}
            placeHolder="Professeur"
            onChange={changementProfesseurHandler}
          />

          <button type="submit" className="button">
            Ajouter Cours
          </button>
        </div>

        <div className="div2">
          <label className="label2">Date début</label>
          <input
            className="input3"
            type="date"
            min="2023-01-01"
            max="2023-06-06"
            value={saisieDateDebut}
            onChange={changementDateDebutHandler}
          />

          <label className="label3">Date fin</label>
          <input
            className="input4"
            type="date"
            min="2023-01-01"
            max="2023-06-06"
            value={saisieDateFin}
            onChange={changementDateFinHandler}
          />
        </div>
      </div>
    </form>
  );
}

export default FormulaireCours;
