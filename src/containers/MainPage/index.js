import React, { useContext } from 'react'
import APIContext from '../../utils/APIContext'

export default function MainPage() {
  const pokemonList = useContext(APIContext)

  console.log('test:', pokemonList)

  return (
    <ol>
      {pokemonList.map(item => (
        <li>{item.name}</li>
      ))}
    </ol>
  )
}
