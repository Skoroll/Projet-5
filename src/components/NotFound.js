import React from 'react';
import '../styles/NotFound.css'

function NotFound() {
  return (
        <main>
          <p className='nf__404'>404</p>
          <p className='nf__text'>Oups! La page que vous demandez n'existe pas</p>
          <a className='nf__link'>Retourner sur la page d’accueil</a>
        </main>

  );
}

export default NotFound;