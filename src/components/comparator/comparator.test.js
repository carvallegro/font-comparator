import React from 'react'
import { shallow } from 'enzyme'

import Comparator from './index'

describe('<Comparator/>', () => {
  it('renders default Comparator', () => {
    const result = shallow(<Comparator />)
    expect(result).toMatchSnapshot()
  })

  it('renders with a custom default font', () => {
    const result = shallow(<Comparator typeface='Cambria' />)
    expect(result).toMatchSnapshot()
  })
})
