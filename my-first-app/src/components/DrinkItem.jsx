// DrinkItem.js

import React from 'react';
import PropTypes from 'prop-types';
import './DrinkItem.css'; // Import your stylesheet

const DrinkItem = ({ drink }) => {
  return (
    <div className="drink-item">
      <img src={drink.imgUrl} alt={drink.alt} className="drink-image" />
      <p className="drink-name">{drink.name}</p>
    </div>
  );
};

DrinkItem.propTypes = {
  drink: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkItem;
