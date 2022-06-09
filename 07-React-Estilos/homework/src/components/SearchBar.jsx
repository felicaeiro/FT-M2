import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css'



export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(){
    const input = document.getElementById('input-search');
    onSearch(input.value)
  }

  return (
  <div className={`${s.search}`}>
    <input id={`${s.inputSearch}`} type="text" placeholder='Ciudad...'/>
    <button onClick={handleOnSearch} className={`${s.button}`}>Agregar</button>
  </div>)
};

SearchBar.propTypes={
  onSearch: PropTypes.func
}