import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import DateDebut from "./DateDebut"
import DateFin from "./DateFin"
import "./CoursObjet.css";

function CoursObjet({cours}) {
    return (
        <li className="user-item">
            <Card className="user-item__content">
            <Link to={`/${cours.id}/etudiants`}>
            <div className="user-item__info">
                        <h2>{cours.titre}</h2>
                        <h3>{cours.professeur}</h3>
                        <h3>{cours.discipline}</h3>
                        <h3>{cours.DateDebut}</h3>
                    </div>
                    </Link>
            </Card>
        </li>
    );
};

export default CoursObjet;