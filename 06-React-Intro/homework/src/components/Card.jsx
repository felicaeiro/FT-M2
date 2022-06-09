import React from 'react';
import MaxMin from "./MaxMin";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
  <div>
    <button onClick={onClose}>X</button>
    <h1>{name}</h1>
    <MaxMin label='Max' value= {max}/>
    <MaxMin label='Min' value= {min}/>
    <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='clima'/>
  </div>
  )
};

// export default function Card(props) {
//   // acá va tu código
//   return (
//   <div>
//     <button onClick={props.onClose}>X</button>
//     <h1>{props.name}</h1>
//     <div>
//       <label>Min {props.min}</label>
//       <span></span>
//     </div>
//     <div>
//       <label>Max {props.max}</label>
//       <span></span>
//     </div>
//     <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='clima'/>
//   </div>
//   )
// };