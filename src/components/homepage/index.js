import React from 'react'
import { Link } from 'react-router-dom'
import { SiteTitle, SubTitle } from '../../components/site-title'
import FontList from '../font-list'

import { Wrapper } from './style'

export const HomepageJSX = () => (
  <Wrapper>
    <SiteTitle>Font Comparator</SiteTitle>
    <SubTitle>Need to find a better title</SubTitle>
    <Link to='/compare'>Go to Comparator</Link>
    <FontList/>
  </Wrapper>
)

export default HomepageJSX
