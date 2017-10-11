import styled from 'styled-components'

let CommonHeader = `
  max-width: ${({theme}) => theme.width};

  color: ${({theme}) => theme.color};
  line-height: ${({theme}) => theme.lineHeight};
`
export const StyledH1 = styled.h1`${CommonHeader}`
export const StyledH2 = styled.h2`${CommonHeader}`
export const StyledH3 = styled.h3`${CommonHeader}`
export const StyledH4 = styled.h4`${CommonHeader}`
export const StyledH5 = styled.h5`${CommonHeader}`
export const StyledH6 = styled.h6`${CommonHeader}`
