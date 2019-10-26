import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import RoutedBox from '../RoutedBox/index'

const HoveredBox = styled(RoutedBox)`
  :hover {
    background: grey;
    color: blue;
  }
`

const Sidebar = props => {
  const { name, number, url } = props
  return (
    <HoveredBox
      path={name}
      direction="row"
      gap="small"
      pad={{ left: 'large', vertical: 'small' }}
      border={{ color: '#E5E4D7', size: 'xsmall', style: 'hidden' }}
      onHover={event => {
        return console.log('test:', event)
      }}
    >
      <Text>{name}</Text>
      <Box round background="#3BE4E7" border>
        <Text color="black">{number}</Text>
      </Box>
    </HoveredBox>
  )
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}
export default Sidebar
