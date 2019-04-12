import React from 'react';
import 'video-react/dist/video-react.css';
import { Link } from 'react-router-dom';
// Affichage de la card video dans les résultats
const Video = item => (
  <div className="col col-md-3 d-flex align-items-stretch">
    {/* Début de la card */}
    <div className="card cardStyle m-1">
      {/* Lien sur l'image */}
      <Link to={`/asset/${item.id}`}>
        <img className="mr-3 card-img-top" alt={item.title} src={item.imgVideo} />
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

export default Video;
