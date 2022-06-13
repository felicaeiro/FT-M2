import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css'



export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  function handleChange(e) {
    setCity((oldCity) => e.target.value)
  }
  
  // acá va tu código
  return (

    <form className={`${s.search}`}
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        id={`${s.inputSearch}`}
        type="text"
        placeholder="Ciudad..."
        onChange={handleChange}
      />
      <input className={`${s.button}`} type="submit" value="Agregar" />
    </form>
  );
}

SearchBar.propTypes={
  onSearch: PropTypes.func
}