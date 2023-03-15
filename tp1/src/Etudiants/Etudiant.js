import React from "react";
import Card

from "../shared/Card";

function Etudiant ({etudiant}) {
    return (
        <li>
            <Card>
                <div>
                    <h2>{etudiant.prenom} {etudiant.nom}</h2>
                    <h3>{etudiant.noAdmission}</h3>
                </div>
            </Card>
        </li>
    );
}

export default Etudiant;