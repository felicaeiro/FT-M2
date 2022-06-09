import React from 'react';
import PropTypes from 'prop-types';


 
export default function Temps ({label, temp}){
    return (
        <div>
            <p>{label}</p>
            <p>{temp}</p>
        </div>
    )
}

Temps.propTypes = {
    label: PropTypes.string,
    temp: PropTypes.number
}