import React, { useState, useEffect } from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import { Route } from 'react-router-dom'
import APIContext from '../../utils/APIContext'
import axios from '../../utils/API'
import MainPage from '../MainPage/Loadable'
import Header from '../../components/Header/index'
import { saveInLocalStorage, getFromLocalStorage } from '../../helper/storage'

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
  const [pokemonList, setPokemonList] = useState(
    getFromLocalStorage('pokemonList') || [],
  )

  useEffect(() => {
    async function fetchPokemonAPI() {
      const response = await axios('?limit=30')
      setPokemonList(response.data.results)
    }
    fetchPokemonAPI()
    saveInLocalStorage('pokemonList', pokemonList)
  }, [pokemonList])
  return (
    <Grommet theme={defaultTheme}>
      <ResponsiveContext.Consumer>
        {size => {
          return (
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
