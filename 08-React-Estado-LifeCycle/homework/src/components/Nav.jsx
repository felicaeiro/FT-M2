import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={`${s.navBar}`}>
      <div className={`${s.head}`}>
        <img id={`${s.logoHenry}`} src={Logo} alt="logo" />
        <h2 className={`${s.title}`}>Henry - Weather App</h2>
      </div>
      <SearchBar onSearch={onSearch}/>

    </div>
  );
};

export default Nav;
