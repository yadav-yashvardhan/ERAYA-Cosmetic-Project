import React from 'react';
import './exploreCosmo.css';
import { cosmo_list } from '../../assets/assets';

function ExploreCosmo() {
  return (
    <div className="explore-cosmo" id="explore-cosmo">
      <h1>Explore our Collections!</h1>
      <p className="explore-cosmo-text">Choose from a diverse collection</p>
      <div className="explore-cosmo-list">
        {cosmo_list.map((item, index) => (
          <div key={index} className="explore-cosmo-list-item">
            <img src={item.cosmo_image} alt={item.cosmo_name} />
            <p>{item.cosmo_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreCosmo;