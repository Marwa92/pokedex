import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { ImageStamp } from 'grommet-controls'
import fetchPokemonDataAPI from '../../services/pokemonData'
import { saveInLocalStorage, getFromLocalStorage } from '../../helper/storage'

const PokemonCard = props => {
  const { match } = props
  const { key } = match.params

  return (
    <Box
      border={{ color: 'brand', size: 'small' }}
      margin={{ horizontal: '15%', bottom: 'medium', top: 'large' }}
      round="15px"
      pad="medium"
      elevation="small"
      gap="medium"
      background={{ color: '#ffffff' }}
    >
      <Box align="center" margin={{ top: '1em' }}>
        <ImageStamp
          src={`${pokemonData &&
            pokemonData.sprites &&
            pokemonData.sprites.front_default}`}
          size="large"
          round="full"
        />
        <Text weight="bold">{pokemonData.name}</Text>
      </Box>
      <Text pad={{ top: '1px' }} margin="xsmall">
        <hr />
      </Text>

      <Box direction="row" gap="xlarge">
        <Text weight="bold" color="black">
          Type:{' '}
          {pokemonData && pokemonData.types
            ? pokemonData.types.map(type => (
                <Text weight="normal" key={type.type.name}>
                  {`${type.type.name}, `}
                </Text>
              ))
            : null}
        </Text>
      </Box>
      <Box direction="row" gap="xlarge">
        <Text weight="bold" color="black">
          Stats:{' '}
          {pokemonData && pokemonData.stats
            ? pokemonData.stats.map(stat => (
                <Text weight="normal" key={stat.stat.name}>
                  {`${stat.stat.name}, `}
                </Text>
              ))
            : null}
        </Text>
      </Box>
    </Box>
  )
}

PokemonCard.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PokemonCard
