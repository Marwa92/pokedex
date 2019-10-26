import React, { useState, useEffect } from 'react'
import { getFromLocalStorage, saveInLocalStorage } from '../helper/storage'
import fetchPokemonAPI from '../services/pokemonList'
import fetchPokemonDataAPI from '../services/pokemonData'

export const APIContext = React.createContext()
function usePokemonList() {
  const [pokemonList, setPokemonList] = useState(
    getFromLocalStorage('pokemonList') || [],
  )

  useEffect(() => {
    async function setList() {
      if (pokemonList.length === 0) {
        const response = await fetchPokemonAPI()
        setPokemonList(response.results)
      } else {
        return pokemonList
      }
    }
    saveInLocalStorage('pokemonList', pokemonList)
    setList()
  }, [pokemonList])
  return pokemonList
}

function usePokemonData() {
  const [pokemonData, setPokemonData] = useState(
    getFromLocalStorage('pokemonData') || {},
  )
  const [loading, setLoading] = useState(false)
  const [pokemonDataList, setPokemonDataList] = useState({})
  // TODO: same comment as App
  async function getPokemonData(key) {
    if (pokemonDataList[key]) {
      pokemonDataList[key]
    } else {
      const response = await fetchPokemonDataAPI(key)
      const pokemonDList = { ...pokemonDataList }
      pokemonDList[key] = response
      setPokemonDataList(pokemonDList)
    }
  }
  return { pokemonData, getPokemonData, loading }
}
export const APIProvider = () => {
  const pokemonList = usePokemonList()
  const { pokemonData, getPokemonData, loading } = usePokemonData()
  return (
    <APIContext.Provider value={{ pokemonList, pokemonDataList, loading }}>
      {this.children}
    </APIContext.Provider>
  )
}
