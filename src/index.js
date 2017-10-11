import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './App'
import theme from './theme'
import store, { history } from './store'

import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  body {
    margin: 0;
    color: #333;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif; 
  } 
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
