import React from 'react';
import './collections.css';


const Collections = ({ url, name }) => {
  return (
    <div id="collections">
      <div className="allCollections" style={{ backgroundImage: { url } }}>
        <p className="tag collectionsText" >{name}</p>
      </div>

      );
    }
    
    export default Collections;
