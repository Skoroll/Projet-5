import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appartementsData from "../datas/appartements.json";
import Carrousel from "../components/Carrousel";
import CollapsibleSection from "../components/CollapsibleSection";
import Loader from "../components/Loader";
import "../styles/AppartementDetail.scss";

function AppartementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appartement, setAppartement] = useState(null);

  useEffect(() => {
    // Trouver l'appartement correspondant à l'id
    //a pour "appartement"
    const foundAppartement = appartementsData.appartements.find(
      (a) => a.id === id
    );
    if (foundAppartement) {
      setAppartement(foundAppartement);
    } else {
      navigate("/notfound");
    }
  }, [id, navigate]);

  useEffect(() => {
    // Mettre à jour le titre de la page lorsque l'appartement est chargé
    if (appartement) {
      document.title = `${appartement.title} - Kasa`;
    }
  }, [appartement]);

  //Scroll automatiquement en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Spinner affiché pendant le chargement de la page si nécessaire
  if (!appartement) {
    return <Loader />;
  }

  return (
    <main>
      <div className="appartement-detail__images">
        <Carrousel pictures={appartement.pictures} />
      </div>
      <div className="block-info">
        <div className="name-location">
          <h1>{appartement.title}</h1>
          <p className="localisation">{appartement.location}</p>
          <div className="tags">
            {appartement.tags.map((tag, index) => (
              <p className="tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="host-and-rating">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star star ${
                  i < appartement.rating ? "filled" : ""
                }`}
              ></i>
            ))}
          </div>
          <div className="host">
            <p>{appartement.host.name}</p>
            <img
              className="host-picture"
              src={appartement.host.picture}
              alt={appartement.host.name}
            />
          </div>
        </div>
      </div>
      <div className="appartement-detail__info">
        <CollapsibleSection
          title="Description"
          content={appartement.description}
        />
        <CollapsibleSection title="Équipements">
          <ul>
            {appartement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>
    </main>
  );
}

export default AppartementDetail;
