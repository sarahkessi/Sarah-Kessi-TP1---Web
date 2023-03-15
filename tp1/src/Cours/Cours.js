import React, { useState } from "react";

import Card from "../Card";
import FiltreSessions from "./FiltreSessions";
import ListeCours from "./ListeCours";

const Cours = (props) => {
  const [sessionFiltree, setSessionFiltree] = useState("Hiver 2023");

  const filtreHandler = (selectedSemester) => {
    setSessionFiltree(selectedSemester);
  };

  const sessionFiltrees = props.items.filter((cours) => {
    return cours.dateDebut.getFullYear().toString() === sessionFiltree;
  });

  return (
    <div>
      <Card>
        <FiltreSessions
          selected={sessionFiltree}
          onChangementFiltre={filtreHandler}
        />
        <ListeCours items={sessionFiltrees} />
      </Card>
    </div>
  );
};

export default Cours;
