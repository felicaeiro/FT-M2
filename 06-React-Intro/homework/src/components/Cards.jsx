import React from 'react';
import Card from "./Card";

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>
    
    {cities.map((c)=>
    <Card 
    key={c.id}
    max={c.main.temp_max}
    min={c.main.temp_min}
    name={c.name}
    img={c.weather[0].icon}
    onClose={() => alert(c.name)}/>)
  }
  </div>
  )
};