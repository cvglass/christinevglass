'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Home from './components/default';
import AppFrame from './components/appFrame';

/*const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)*/

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        {/*<IndexRedirect to="/home" component={Home} />*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
