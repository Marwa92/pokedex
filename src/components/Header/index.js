import React from 'react'
import { Header as Appbar } from 'grommet-controls'
import { Box, Heading } from 'grommet'

const Header = () => (
  <Box>
    <Appbar position="sticky">
      <Heading level={2} margin="none">
        Pokedex
      </Heading>
    </Appbar>
  </Box>
)

export default Header
