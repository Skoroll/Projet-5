import React from "react";
import "../styles/NotFound.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  //Scroll automatiquement en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Scroll automatiquement en haut de page au chargement
  useEffect(() => {
    document.title = `404 - Kasa`;
  });

  //Page affichée lors de toutes mauvaise redirection/faute URL
  return (
    <main>
      <p className="not-found__404">404</p>
      <p className="not-found__text">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/home" className="not-found__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default NotFound;
