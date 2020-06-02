import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost' /* nos permite iniciar rápidamente con Apollo */
import { ApolloProvider } from 'react-apollo' /* Componente con el que envolvemos nuestra aplicación de forma que podamo utilizar Apollo en cualquier parte del arbol de elementos */
import Context from './Context'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://petgram-server-iko-8mw0avk5b.now.sh/graphql'
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
