import React from 'react';
import '../styles/About.css';
import Banner from '../components/Banner';

function About() {
  return (
    <main>
      <Banner version='mountain' />
    
      <article className='Fiability'>
        <div className='article__colapse'>
           <h2>Fiabilité</h2>
           <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les pohtos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </article>
      <article className='Respect'>
        <div className='article__colapse'>
          <h2>Respect</h2>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </article>
      <article className='Service'>
        <div className='article__colapse'>
          <h2>Service</h2>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </article>
      <article className='Security'>
        <div className='article__colapse'>
          <h2>Sécurité</h2>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <p>La sécurité est la priorité de Kasa. Aussi pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </article>



    </main>
  );
}

export default About;