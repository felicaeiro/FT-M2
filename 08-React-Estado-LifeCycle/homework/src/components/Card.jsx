import React from 'react';
import './Card.css'
import Temps from './Temps'
import PropTypes from 'prop-types';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return( 
  <div className='card'>
    <button onClick={onClose} className='button'>X</button>
    <h1 className='city'>{name}</h1>
    <Temps label= 'Min' temp ={min} id='min'/>
    <Temps label= 'Max' temp ={max} id='max'/>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='clima' className='imagen'/>
  </div>
  )
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func
}