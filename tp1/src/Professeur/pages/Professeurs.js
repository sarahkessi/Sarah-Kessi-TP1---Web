import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";

function Professeurs() {
    const professeurs = [
        {
            id: "p1",
            nom: "Sarah Kessi",
            cours: 4,
        },
    ];
    return <ListeProfesseurs professeurs={professeurs} />;
}

export default Professeurs;