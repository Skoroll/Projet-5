import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appartementsData from "../datas/appartements.json";
import Carrousel from "../components/Carrousel";
import CollapsibleSection from "../components/CollapsibleSection";
import Tooltip from "../components/Tooltip"; 
import "../styles/AppartementDetail.scss";

function AppartementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const appartement = appartementsData.appartements.find((a) => a.id === id);

  useEffect(() => {
    if (!appartement) {
      navigate("/notfound");
    }
  }, [appartement, navigate]);

  if (!appartement) {
    return null;
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
              <Tooltip key={index} text={tag}>
                <p className="tag">{tag}</p>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="host-and-rating">
          <p className="rating">{"⭐".repeat(appartement.rating)}</p>
          <div className="host">
            <p>{appartement.host.name}</p>
            <img className="host-picture" src={appartement.host.picture} alt={appartement.host.name} />
          </div>
        </div>
      </div>
      <div className="appartement-detail__info">
        <CollapsibleSection 
          title="Description" 
          content={appartement.description}
        />
        <CollapsibleSection 
          title="Équipements"
        >
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
