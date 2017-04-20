'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'

import About from './components/about';
import AppFrame from './components/appFrame';
import Portfolio from './components/portfolio';

render (
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <IndexRedirect to="/about" />
      </Route>
    </Router>,
  document.getElementById('main')
)
