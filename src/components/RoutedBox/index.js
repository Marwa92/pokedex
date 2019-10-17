import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const StyledBox = styled(Box)`
  cursor: ${props => (props.path ? 'pointer' : 'auto')};
`

const RoutedBox = props => {
  const { path, children, history, location } = props

  return (
    <StyledBox
      {...props}
      onClick={() => {
        if (location.pathname !== path) {
          history.push(path)
        }
      }}
    >
      {children}
    </StyledBox>
  )
}

RoutedBox.propTypes = {
  path: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

RoutedBox.defaultProps = {
  children: [],
  path: null,
}

export default withRouter(RoutedBox)
