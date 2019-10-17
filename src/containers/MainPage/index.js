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
        <Switch>
          {pokemonList.map(pokemon => {
            return (
              <Route
                key={pokemon.name}
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
