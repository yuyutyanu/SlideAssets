import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './container/Presentation'
import './assets/index.css'

import * as serviceWorker from './serviceWorker';
import { CMS_URL } from './config'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppSlide from './container/AppSlide'

const client = new ApolloClient({
  uri: CMS_URL
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Presentation}></Route>
          <Route exact path="/slide/:title" component={AppSlide}/>
        </Switch>
      </div>
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
