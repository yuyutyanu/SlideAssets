import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './container/blog'
import * as serviceWorker from './serviceWorker';
import {CMS_URL} from './config'

const client = new ApolloClient({
  uri: CMS_URL
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Blog/>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
