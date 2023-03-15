import React from "react";

import "./FiltreSessions.css"

const FiltreSessions = (props) => {
    const menuDeroulantHandler = (event) => {
        props.onChangementFiltre(event.target.value);
    };

    return (
        <div className="cours-filter">
            <div className ="cours-filter__control">
                <label>Filtrer par session</label>
                <select value={props.selected} onChange={menuDeroulantHandler}>
                    <option value="Hiver 2023">Hiver 2023</option>
                    <option value="Autome 2022">Automne 2022</option>
                    <option value="Hiver 2022">Hiver 2022</option>
                    <option value="Automne 2021">Automne 2021</option>
                    <option value="Hiver 2021">Hiver 2021</option>
                </select>
            </div>
        </div>
    );
};

export default FiltreSessions;
