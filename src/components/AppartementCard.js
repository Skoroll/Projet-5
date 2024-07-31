import React from 'react';
import { Link } from 'react-router-dom';

function AppartementCard({ appartement }) {
    return (
        //Création des éléments de la liste//
        //Link renvoi à la page appartement correspondante à l'id donné (appartement.id)
        <li className="list__card">
            <Link to={`/appartement/${appartement.id}`}>
                <img src={appartement.cover} alt={appartement.title} />
                <div className='appartement-background'>
                    <h2>{appartement.title}</h2>
                </div>
            </Link>
        </li>
    );
}

export default AppartementCard;
