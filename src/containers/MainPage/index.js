import React, { useContext } from 'react'
import { Grid, Box, Text } from 'grommet'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import RoutedBox from '../../components/RoutedBox/index'
import PokemonCard from '../../components/PokemonCard/Loadable'
import APIContext from '../../utils/APIContext'

const HoveredBox = styled(RoutedBox)`
  :hover {
    background: grey;
    color: blue;
  }
`
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
          // TODO: should be a component
          <HoveredBox
            key={pokemon.url}
            path={pokemon.name}
            direction="row"
            gap="small"
            pad={{ left: 'large', vertical: 'small' }}
            border={{ color: '#E5E4D7', size: 'xsmall', style: 'hidden' }}
          >
            <Text>{pokemon.name}</Text>
            <Box round background="#3BE4E7" border>
              <Text color="black">{pokemonList.indexOf(pokemon) + 1}</Text>
            </Box>
          </HoveredBox>
        ))}
      </Box>
      <Box gridArea="main">
        // TODO: while interesting, Switch is meant for known routes not dynamic
        detail views like the poekomon card one // This is also why you have all
        the routes apearing, since all of them match the pattern // On another
        note, what happens if I open a url link to a pokemon that's not one of
        the first 30
        <Switch>
          {pokemonList.map(pokemon => {
            return (
              <Route
                key={pokemon.name}
                // FIXME: this is why your deployed version gets errors
                // in localhost :key is the pokemon when you click on it
                // but in production you have pokedex under after host and the router considers it a pokemon
                path="/:key"
                render={Props => <PokemonCard {...Props} />}
              />
            )
          })}
        </Switch>
      </Box>
    </Grid>
  )
}
