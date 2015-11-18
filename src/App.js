import React from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router'
import Writer from './Writer'

const App = (props) =>
  <div style={{
    padding: '50px',
    fontFamily: 'Lato, sans-serif',
    backgroundColor: '#f2f2f2'
  }}>
    {props.children}
  </div>

export const Root = () =>
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Writer} />
    </Route>
  </Router>
