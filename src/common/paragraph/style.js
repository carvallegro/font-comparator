import styled from 'styled-components'

export const ParagraphStyled = styled.p`
  max-width: ${({theme}) => theme.width};

  color: ${({theme}) => theme.color};
  font-size: ${({theme}) => theme.fontSize};
  line-height: ${({theme}) => theme.lineHeight};
`
