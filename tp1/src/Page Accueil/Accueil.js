import React from "react";
import "./Accueil.css";
import montmorency from "../assets/montmorency.png";

function Accueil() {
  return (
    <div>
      <img
        style={{
          height: 100,
          width: 550,
          position: "absolute",
          top: -400,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
        }}
        src={montmorency}
        alt="logo"
        loading="lazy"
      />
      <p className="texte">
        Ce site vous permet de consulter la liste des professeurs ainsi que les
        cours donnés à travers le menu de navigation. Il permet aussi
        d'embaucher des professeurs et d'ajouter des étudiants
        dans un cours spécifique.{" "}
      </p>
    </div>
  );
}

export default Accueil;
