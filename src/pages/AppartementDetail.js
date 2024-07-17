import React from "react";
import { useParams } from "react-router-dom";
import appartementsData from "../datas/appartements.json";
import Carrousel from "../components/Carrousel";
import "../styles/AppartementDetail.css";

function AppartementDetail() {
  const { id } = useParams();
  const appartement = appartementsData.appartements.find((a) => a.id === id);

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <main>
      <div className="appartement-detail__images">
        <Carrousel pictures={appartement.pictures} />
      </div>
      <h1>{appartement.title}</h1>
      <p className="localisation">{appartement.location}</p>
      <div className="tags">
        {appartement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="host-and-rating">
                <p className="rating">{"⭐".repeat(appartement.rating)}</p>
        <div className="host">
        <p>{appartement.host.name}</p>
        <img className="host-picture" src={appartement.host.picture} alt={appartement.host.name} />
      </div>
      </div>
      
      <div className="appartement-detail__info">
        <div className="description category-heading">
            <h2>Description</h2>
            <i className="fa-solid fa-chevron-down"></i>
        </div>
            <p>{appartement.description}</p>
        <div className="equipment category-heading">
        <h2>Équipements</h2>
        <i className="fa-solid fa-chevron-down"></i>
        </div>
        <ul>
          {appartement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
        




      </div>
    </main>
  );
}

export default AppartementDetail;
