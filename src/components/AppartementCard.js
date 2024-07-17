import React from 'react';
import { Link } from 'react-router-dom';


function AppartementCard({ appartement }) {
    return (
        <li className="list__card">
            <Link to={`/appartement/${appartement.id}`}>
                <img src={appartement.cover} alt={appartement.title} />
                <h3>{appartement.title}</h3>
            </Link>
        </li>
    );
}

export default AppartementCard;
