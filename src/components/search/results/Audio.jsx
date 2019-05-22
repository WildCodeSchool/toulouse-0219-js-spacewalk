import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icon-podcast.svg';
// Affichage de la card video dans les résultats
const Audio = item => (
  <div className="col col-md-3 d-flex align-items-stretch">
    {/* Début de la card */}
    <div className="card cardStyle m-1 flex-fill">
      {/* Lien sur l'image */}
      <Link to={`/asset/${item.id}`}>
        <img src={icon} alt="icon audio" />
      </Link>
      <div className="card-body">
        <div className="badge badge-pill badge-success mr-1">{item.type}</div>
        {/* Lien sur le titre */}
        <Link to={`/asset/${item.id}`}>
          <h5 className="card-text">{item.title}</h5>
        </Link>
        {/* Date de publication */}
        <p>{item.date}</p>
      </div>
    </div>
    {/* Fin de la card */}
  </div>
);

export default Audio;
