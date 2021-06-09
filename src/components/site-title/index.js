import styled from 'styled-components'

const SiteTitle = styled.h1`
  margin: 0;
  color: ${({theme}) => theme.siteTitle.color};
  font-size: ${({theme}) => theme.siteTitle.fontSize};
  font-variant-caps: all-small-caps;
  
`

const SubTitle = styled.h1`
  margin: 0;
  color: ${({theme}) => theme.subTitle.color};
  font-size: ${({theme}) => theme.subTitle.fontSize};
  font-weight: lighter;
`

export { SiteTitle, SubTitle }
