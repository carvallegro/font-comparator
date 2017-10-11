import React from 'react'

import { SiteTitle, SubTitle } from '../../components/site-title'
import FontList from '../font-list'

import { Wrapper } from './style'

export const HomepageJSX = () => (
  <Wrapper>
    <SiteTitle>Font Comparator</SiteTitle>
    <SubTitle>Need to find a better title</SubTitle>
    <button>Go to Comparator</button>
    <FontList />
  </Wrapper>
)

export default HomepageJSX
