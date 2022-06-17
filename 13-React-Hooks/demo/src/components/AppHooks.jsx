import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName } from '../actions';

export default function AppHooks() {
  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)

  //useDispatch -> store.dispatch()
  //connect(mapStateToProps, null)
  const dispatch = useDispatch() // dispatch va a despachar acciones
  //dispatch(saveName(name))

  //useSelector -> mapStateToProps
  //function mapStateToProps(state) {
  // return {
  //   nameRedux: state.name
  //}
  //}

  const nameRedux = useSelector(state => state.name)

  //otro Hook
  // useReducer(state, initialState) => devuelve un arreglo [state, dispatch]

  useEffect(() =>
    console.log('Hubo un cambio')
      //se ejecuta siempre(cuando se monta y cada vez que se modifica el estado local)
  )

  useEffect(() => {
    console.log('se ejecuta una vez, cuando se monta')
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('Entra...');
      console.log('se ejecuta cuando se desmonta(AppHooks)')
      window.removeEventListener('resize', handleResize)
      //se ejecuta cuando se desmonta el componente
    }
  }, [])
  
  function handleChange(e) {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = name
    console.log('se modifico el estado name')
    //se ejecuta cada vez que se modifica el estado de name
  },[name])

  useEffect(() => {
    console.log('se modifico el estado local nameRedux')
    //se ejecuta cada vez que se modifica el estado de nameRedux
  },[nameRedux])


  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div>
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }
