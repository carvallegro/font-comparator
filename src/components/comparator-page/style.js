import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  
  background-color: ${({theme}) => theme.comparatorPage.backgroundColor};
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  align-content: center;
`
