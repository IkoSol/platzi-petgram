import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient } from 'apollo-boost' /* nos permite iniciar rápidamente con Apollo */
import { ApolloProvider } from 'react-apollo' /* Componente con el que envolvemos nuestra aplicación de forma que podamo utilizar Apollo en cualquier parte del arbol de elementos */

const client = new ApolloClient({ /* se inicializa el cliente */
  uri: 'https://petgram-server-iko-8mw0avk5b.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))
