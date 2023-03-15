import React from "react";
import "./ListeProfesseurs.css";
import Professeur from "./Professeur";
import Card from "../../shared/Card";

function ListeProfesseurs(props) {
  if (props.professeurs.length === 0) {
    return (
      <div className="center">
        <h2>Aucun professeur</h2>
      </div>
    );
  }

  return (
    <div className="div1">
      <div>
      <ul className="user-list">
        {props.professeurs.map((professeur) => (
          <Professeur key={professeur.id} professeur={professeur} />
        ))}
      </ul>{" "}
      </div>
      
    </div>
  );
}

export default ListeProfesseurs;
