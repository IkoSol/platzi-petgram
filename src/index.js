import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient, { InMemoryCache } from 'apollo-boost' /* nos permite iniciar rápidamente con Apollo */
import { ApolloProvider } from 'react-apollo' /* Componente con el que envolvemos nuestra aplicación de forma que podamo utilizar Apollo en cualquier parte del arbol de elementos */
import Context from './Context'

const cache = new InMemoryCache()

const client = new ApolloClient({ /* se inicializa el cliente */
  uri: 'https://petgram-server-iko-8mw0avk5b.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token') /* JSON Web token */
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  onError: error => { /* se agrega este onError para no tener problemas cuando el token expire */
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  },
  cache
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app'))
