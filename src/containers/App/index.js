import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Grommet, ResponsiveContext } from 'grommet'
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
  async function fetchPokemonAPI() {
    const response = await axios('')
    // console.log('response:', response.data)
    setPokemonList(response.data.results)
  }

  useEffect(() => {
    fetchPokemonAPI()
    saveInLocalStorage('pokemonList', pokemonList)
  }, [pokemonList])
  return (
    <Grommet theme={defaultTheme}>
      <ResponsiveContext.Consumer>
        {size => {
          console.log('size', size)
          return (
            <APIContext.Provider value={pokemonList}>
              <Header />
              <Route exact path="/" component={MainPage} />
            </APIContext.Provider>
          )
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
