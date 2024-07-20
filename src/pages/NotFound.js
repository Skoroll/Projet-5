import React from 'react';
import '../styles/NotFound.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NotFound() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);
  return (
        <main>
          <p className='not-found__404'>404</p>
          <p className='not-found__text'>Oups! La page que vous demandez n'existe pas</p>
          <Link to="/home" className='not-found__link'>Retourner sur la page d’accueil</Link>
        </main>

  );
}

export default NotFound;