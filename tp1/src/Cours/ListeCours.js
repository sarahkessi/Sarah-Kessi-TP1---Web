import React from "react";

import CoursObjet from "./CoursObjet";
//import "./ListeCours.css";

function ListeCours(props) {
  if (props.cours.length === 0) {
    return (
      <div className="center">
        <h2>Aucun cours</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.cours.map((cours) => (
        <CoursObjet key={cours.id} cours={cours} />
      ))}
    </ul>
  );
}

export default ListeCours;
