import Card from "../shared/Card";
import React from "react";
import Etudiant from "./Etudiant";

function ListeEtudiants(props) {
  if (props.length === 0)
    return (
      <div>
        <Card>
          <h2>Pas d'étudiants</h2>
        </Card>
      </div>
    );

  return (
    <ul>
      {props.etudiants.map((etudiant) => (
        <Etudiant key={etudiant.noAdmission} etudiant={etudiant} />
      ))}
    </ul>
  );
}

export default ListeEtudiants;
