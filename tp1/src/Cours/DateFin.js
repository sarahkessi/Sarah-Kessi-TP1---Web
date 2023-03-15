import React from "react";

const DateFin = (props) => {
    const mois = props.date.toLocaleString("fr-CA", {month: "long"});
     const jour = props.date.toLocaleString("fr-CA", {day: "2-digit"});
     const annee = props.date.getFullYear();

     return (
        <div className="cours-date">
            <div className="cours-date__mois">{mois}</div>
            <div className="cours-date__annee">{annee}</div>
            <div className="cours-date__jour">{jour}</div>
        </div>
     );
};

export default DateFin;