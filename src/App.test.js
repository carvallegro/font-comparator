import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders', () => {
  const result = shallow(<App />)
  expect(result).toMatchSnapshot()
})
