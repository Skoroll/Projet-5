import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Banner";
import appartementsData from "../datas/appartements.json";
import AppartementCard from "../components/AppartementCard";
import { useEffect } from "react";
function Home() {
  //Scroll automatiquement en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = `Accueil - Kasa`;
  });

  //L'id utilisé pour les cartes et celle fournie dans le JSON
  return (
    <main>
      <Banner version="cliff" />
      <div className="kasa__list">
        <ul className="appartements-ul">
          {appartementsData.appartements.map((appartement) => (
            <AppartementCard key={appartement.id} appartement={appartement} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
