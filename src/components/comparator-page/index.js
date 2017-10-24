import React from 'react'

import Menu from '../comparator-menu'
import Comparator from '../comparator'

import { Wrapper } from './style'

export const ComparatorPageJSX = () => (
  <Wrapper>
    <Menu />
    <Comparator typeface='Baskerville, "Baskerville Old Face", "Hoefler Text"' />
    <Comparator typeface='"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic' />
  </Wrapper>
)

export default ComparatorPageJSX
