import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  align-content: center;
`

export const FontName = styled.div`
  margin: 10px;
  color: white;
`

export const FontUrl = styled.pre`
  margin: 10px;
  color: white;
  
  & span{
    color: yellow;
  }
`
