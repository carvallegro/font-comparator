import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  
  background-color: ${({theme}) => theme.homepage.backgroundColor};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`
