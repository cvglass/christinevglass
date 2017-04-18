'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import About from './components/about';
import AppFrame from './components/appFrame';
import Portfolio from './components/portfolio';

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <Route path="/about" component={About} />
        <IndexRedirect to="/about" />
        <Route path="/portfolio" component={Portfolio} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
