import React from "react";

import ListeEtudiants from "./ListeEtudiants";

import { useParams } from "react-router-dom";

export const ETUDIANTS = [
    {
        noAdmission: 2156390,
        nom: "Kessi",
        prenom: "Sarah",
        createur: "c1",
    }
];

function EtudiantsCours() {
    const coursId = useParams().coursId;
    const etudiantsCharges = ETUDIANTS.filter((etudiant) => (etudiant.createur === coursId));
    return (
        <ListeEtudiants etudiants={etudiantsCharges} />
    )
}

export default EtudiantsCours;