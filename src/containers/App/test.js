import React, { useContext } from 'react'
import APIContext from '../../APIContext'

export default function HomePage() {
    const pokemonList = useContext(APIContext)
  
    console.log('test:', pokemonList)
  
    return (
          pokemonList.map(item=><div>{item.name}</div> )
      )
  }
