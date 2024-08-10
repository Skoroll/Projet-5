import React from "react";
import "../styles/pages/About.scss";
import Banner from "../components/Banner";
import CollapsibleSection from "../components/CollapsibleSection";
import { useEffect } from "react";

//Les textes à afficher dans les collapses du "about"
const articles = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

//Scroll automatiquement en haut de page au chargement
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = `A propos - Kasa `;
  });

  //Continent la bannière en version "mountain" et les collapse correspondant au const=articles plus haut
  return (
    <main>
      <Banner version="mountain" />
      <div className="collapse-container">
        {articles.map((article, index) => (
          <CollapsibleSection
            key={index}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </main>
  );
}

export default About;
