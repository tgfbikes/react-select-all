

import React from 'react';
import PropTypes from 'prop-types';
import './Captain.css';

export default function Captain ({ captain, onClick, selected }) {

  return (
    <div className="Captain">
      <button
        className={`Captain__button ${selected ? 'Captain__button--selected' : ''}`}
        onClick={() => onClick(captain.id)}
      >
        <div className="Captain__button-content">
          <div className="Captain__button-captain-info">
            <img src={captain.imagePath} alt={`captain ${captain.name}`} className="Captain__button-img" />
            <div className="Captain__button-header">
              <h2>{captain.name}</h2>
              <p>&quot;{captain.quote}&quot;</p>
            </div>
          </div>
          <ul>
            <li><strong>Ship:</strong> {captain.ship}</li>
            <li><strong>Bad ass factor:</strong> {captain.badAssFactor}</li>
          </ul>
        </div>
      </button>
    </div>
  );
}

Captain.propTypes = {
  captain: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};