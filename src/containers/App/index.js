import React, { useState, useEffect } from 'react'
import APIContext from '../../APIContext'
import axios from '../../utils/API'
import MainPage from '../MainPage/index'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  async function fetchPokemonAPI() {
    const response = await axios('')
    console.log('response:', response.data)
    setPokemonList(response.data.results)
  }

  useEffect(() => {
    fetchPokemonAPI()
  }, [])
  return (
    <APIContext.Provider value={pokemonList}>
      <div>pokedex</div>
      <MainPage />
    </APIContext.Provider>
  )
}

export default App