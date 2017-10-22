import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: ${({typeface}) => typeface};
  background-color: grey;
  flex-grow: 1;
  overflow-y: scroll;
`
