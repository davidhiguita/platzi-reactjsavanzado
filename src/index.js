import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import UserAuthContext from './context/UserAuthContext'
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server.davidhiguita.now.sh/graphql'
})

reactDOM.render(
  <UserAuthContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserAuthContext.Provider>,
  document.querySelector('#app')
)
