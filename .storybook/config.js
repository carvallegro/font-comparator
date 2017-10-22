import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    color: #333;
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  } 
`

const req = require.context('../src/', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);