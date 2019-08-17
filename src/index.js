import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import UserAuthContext from './context/UserAuthContext'
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server.davidhiguita.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

reactDOM.render(
  <UserAuthContext.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserAuthContext.Provider>,
  document.querySelector('#app')
)
