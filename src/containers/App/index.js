import React, { useState, useEffect } from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import { Route } from 'react-router-dom'
import APIContext from '../../utils/APIContext'
import MainPage from '../MainPage/Loadable'
import Header from '../../components/Header/index'
import { saveInLocalStorage, getFromLocalStorage } from '../../helper/storage'
import fetchPokemonAPI from '../../services/pokemon'

const defaultTheme = {
  global: {
    colors: {
      brand: '#2E4779',
      white: '#ffffff',
      black: '#000000',
    },
    font: {
      family: 'Poppins',
    },
  },
}
function App() {
  const [pokemonList, setPokemonList] = useState([])
  // TODO: Good idea but only useful on the first run, afterwards the ruturn value is ignored
  // preferably get and set storage should be async and is therefor something that happens as an effect
  // in the case where poekmonList becomes too large, you delay the render cycle for no reason
  //   getFromLocalStorage('pokemonList') || [],
  // )

  // TODO: have a loading state for when the pokemonAPI is loading and indicate it
  useEffect(() => {
   console.log( fetchPokemonAPI())

    // async function fetchPokemonAPI() {
    //   // FIXME: should check if component is already cached
    //   const response = await axios('?limit=30')
    //   // FIXME: handle error either here or generally in axios
    //   // FIXME: state update logic should not be coupled with data fetcing logic; have function do one thing and return the value
    //   setPokemonList(response.data.results)
    // }
    // FIXME: should only call once;
    // Effect gets called everytime because the function fetchPokemonAPI calls setPoekmonList
    // with a new array everytime; which is a new object reference, so the effect runs over and over
    fetchPokemonAPI()
    // FIXME: should cache after fetch resolves
    saveInLocalStorage('pokemonList', pokemonList)
  }, [pokemonList])

  return (
    <Grommet theme={defaultTheme}>
      <ResponsiveContext.Consumer>
        {size => {
          return (
            // TODO: clearly seperate the provider and it's logic into it's own component
            // you will also need to pass more then just the pokemonList into the other components (the loading status for example)
            <APIContext.Provider value={pokemonList}>
              <Header />
              <MainPage size={size} />
              <MainPage />
              <Route path="/" component={MainPage} />
            </APIContext.Provider>
          )
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
