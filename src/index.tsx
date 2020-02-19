import React from 'react'
import ReactDOM from 'react-dom'
import { withApollo, ApolloProvider } from 'react-apollo'
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost'

import App from './components/App'
import { isProd } from './utils/envs'

const url = isProd()
  ? 'https://ttu0bk9oc0.execute-api.us-west-2.amazonaws.com/prod/graphql'
  : 'https://6or7w5l6lj.execute-api.us-west-2.amazonaws.com/dev/graphql'

const httpLink = new HttpLink({ uri: url })

const authLink = new ApolloLink((operation, forward) => {
  // Call the next link in the middleware chain.
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
})

const AppWithApollo = withApollo(App)

const Index = () => (
  <ApolloProvider client={client}>
    <AppWithApollo />
  </ApolloProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'))
