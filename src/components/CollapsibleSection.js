import React, { useState } from "react";
import "../styles/CollapsibleSection.scss";

function CollapsibleSection({ title, content, children }) {
  //UseState créant l'état "ouvert" et "fermé"
  const [isOpen, setIsOpen] = useState(false);

  //Fonction qui applique le statut "setIsOpen" si le collapse n'est pas déjà ouvert (soit !isOpen)
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  //Donc ici, le clique sur section-heading vérifiera si le collapse est fermé, si oui, il l'ouvre en ajoutant la classe "open" a collapsible-section et "show a content".
  //Autrement, il le ferme, en retirant la classe "open" et "show à content".
  return (
    <div className={`collapsible-section ${isOpen ? "open" : ""}`}>
      <div className="section-heading" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className={`content ${isOpen ? "show" : ""}`}>
        {content || children}
      </div>
    </div>
  );
}

export default CollapsibleSection;
