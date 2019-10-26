import React, { useContext, useState } from 'react'
import { Grid, Box } from 'grommet'
import { Switch, Route } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/index'
import PokemonCard from '../../components/PokemonCard/Loadable'
import APIContext from '../../utils/APIContext'

export default function MainPage() {
  // TODO: after expanding the context to including the loading state you would destruct it from here
  const pokemonList = useContext(APIContext)

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'sidebar', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      alignContent="between"
      alignSelf="center"
    >
      <Box
        background="brand"
        width="small"
        animation={[
          { type: 'fadeIn', duration: 300 },
          { type: 'slideRight', size: 'xlarge', duration: 150 },
        ]}
      >
        {pokemonList.map(pokemon => (
          <Sidebar
            key={pokemon.url}
            url={pokemon.url}
            name={pokemon.name}
            number={pokemonList.indexOf(pokemon) + 1}
          />
        ))}
      </Box>
      <Box gridArea="main">
        {/* // TODO: while interesting, Switch is meant for known routes not dynamic
        detail views like the poekomon card one // This is also why you have all
        the routes apearing, since all of them match the pattern // On another
        note, what happens if I open a url link to a pokemon that's not one of
        the first 30 */}
        <Switch>
          {pokemonList.map(pokemon => {
            return (
              <Route
                key={pokemon.name}
                path="/:var?/:key"
                render={Props => <PokemonCard {...Props} />}
              />
            )
          })}
        </Switch>
      </Box>
    </Grid>
  )
}
