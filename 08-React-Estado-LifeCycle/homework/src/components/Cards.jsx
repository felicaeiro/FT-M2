import React from 'react';
import Card from "./Card";
import PropTypes from 'prop-types';
import './Cards.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className='cards'>

    {cities.map((c)=> 
      <Card
        key={c.id}
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        onClose={() => onClose(c.id)}
    />)}
  </div>
  )
};

Cards.propTypes = {
  cities: PropTypes.array
}
