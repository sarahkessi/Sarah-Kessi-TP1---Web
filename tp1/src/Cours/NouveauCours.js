import React, { useState } from "react";

import FormulaireCours from "./FormulaireCours";

const NouveauCours = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerCoursHandler = (coursSaisi) => {
    const donneesCours = {
      ...coursSaisi,
      id: Math.random().toString(),
    };

    <FormulaireCours
      onAdd={() => setEnEdition(() => coursSaisi.concat(donneesCours))}
    />;

    setEnEdition(false);
  };

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className="nouveau-cours">
      {!enEdition && (
        <button onClick={debutEditionHandler}>Ajouter nouveau cours</button>
      )}
      {enEdition && (
        <FormulaireCours
          onSaveDonnees={enregistrerCoursHandler}
          onCancel={arretEditionHandler}
        />
      )}
    </div>
  );
};

export default NouveauCours;
