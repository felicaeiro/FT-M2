import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

 const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador')

  const toggle = () => {
    // !activo ? setActivo(true) : setActivo(false)
    setActivo(!activo)
  }

  const reset = () => {
    setSegundos(0);
    setActivo(false);
    if(myRef.current) myRef.current.value=0
     
  }

  const cambioTipo = () => {
    if(tipo === 'Contador') {
      setTipo('Cuenta Regresiva');
    } else if(tipo === 'Cuenta Regresiva') {
      setTipo('Contador')
    } 
    reset()
  }

  const myRef = useRef()

  const handleOnChange = () =>{
    let ref = myRef.current.value
    setSegundos(ref)
  }

 
  useEffect(() => { 
    let intervalo
    if(activo && tipo==='Contador') {
      intervalo = setInterval(() => setSegundos(prev => prev + 1), 1000) 
    } else if(activo && tipo==='Cuenta Regresiva') {
      
        if(segundos > 0){
          intervalo = setInterval(() => {
          setSegundos(prev => prev - 1)
          }, 1000)
        } else {
        reset();
        clearInterval(intervalo);
        }
    } else if (!activo && tipo==='Contador' && segundos !==0) clearInterval(intervalo)
      // else if (segundos === 0 && tipo === 'Cuenta Regresiva') {
        
      // }
    return () => clearInterval(intervalo)
  }, [activo, tipo, segundos])

  return (
    <div className="app">
      <div className="time">
        {`${!segundos ? '0' : segundos} segundos`}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive' }`} onClick={toggle}>
          {activo ? 'Pausa' :'Inicio'}
        </button>
        <button className="button button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && 
      <input 
        type="number" 
        placeholder="Ingresa Segundos" 
        autoComplete="off"
        ref = {myRef}
        onChange={handleOnChange}/>}
    </div>
  );
};

export default Timer;