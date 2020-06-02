import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost' /* nos permite iniciar rápidamente con Apollo */
import { ApolloProvider } from 'react-apollo' /* Componente con el que envolvemos nuestra aplicación de forma que podamo utilizar Apollo en cualquier parte del arbol de elementos */
import Context from './Context'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://petgram-server-iko-8mw0avk5b.now.sh/graphql',
  request: operation => { /* La propiedad request se va a ejecutar justo antes de hacer cualquier peticion al servidor */
    const token = window.sessionStorage.getItem('token') /* JSON Web token */
    console.log(token)
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
  }
})

const client = new ApolloClient({ /* se inicializa el cliente */
  cache,
  link
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app'))
