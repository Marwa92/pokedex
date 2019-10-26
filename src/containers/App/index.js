import React from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import { Route } from 'react-router-dom'
import APIProvider from '../../utils/APIContext'
import MainPage from '../MainPage/Loadable'
import Header from '../../components/Header/index'

const defaultTheme = {
  global: {
    colors: {
      brand: '#2E4779',
      white: '#ffffff',
      black: '#000000',
    },
    font: {
      family: 'Poppins',
    },
  },
}
function App() {
  // TODO: Good idea but only useful on the first run, afterwards the ruturn value is ignored
  // preferably get and set storage should be async and is therefor something that happens as an effect
  // in the case where poekmonList becomes too large, you delay the render cycle for no reason

  // TODO: have a loading state for when the pokemonAPI is loading and indicate it

  return (
    <Grommet theme={defaultTheme}>
      <ResponsiveContext.Consumer>
        {size => {
          return (
            // TODO: clearly seperate the provider and it's logic into it's own component
            // you will also need to pass more then just the pokemonList into the other components (the loading status for example)
            <APIProvider>
              <Header />
              <MainPage size={size} />
              <MainPage />
              <Route path="/" component={MainPage} />
            </APIProvider>
          )
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
