import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server.davidhiguita.now.sh/graphql'
})

reactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#app')
)
