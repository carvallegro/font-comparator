import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Homepage from './components/homepage'
import ComparatorPage from './components/comparator-page'

const App = () => <Switch>
  <Route path='/home' component={Homepage} />
  <Route path='/compare' component={ComparatorPage} />
  <Redirect from='/' to='/home' />
</Switch>

export default App
