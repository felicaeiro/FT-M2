import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'



export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(){
    const input = document.getElementById('input-search');
    onSearch(input.value)
  }

  return (
  <div className='search'>
    <input id='input-search' type="text" placeholder='Ciudad...'/>
    <button onClick={handleOnSearch} className='button-search'>Agregar</button>
  </div>)
};

SearchBar.propTypes={
  onSearch: PropTypes.func
}