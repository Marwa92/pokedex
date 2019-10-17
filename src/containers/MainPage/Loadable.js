import React from 'react'
import Loadable from 'react-loadable'

import LoadingIndicator from '../../components/LoadingIndicator/index'

export default Loadable({
  // TODO: Good job on dynamically loading, but this tihs doesn't handle showing loading when API calls are made
  // and if anything it actually slows down the load time of the app as the main page is a core component of the app that we would like to load as soon as possible
  // no reason to dynamically import
  // also you are advised to use React.lazy and Suspense for doing this
  // https://reactjs.org/blog/2018/10/23/react-v-16-6.html
  loader: () => import('./index'),
  loading() {
    return <LoadingIndicator size={7} />
  },
})
