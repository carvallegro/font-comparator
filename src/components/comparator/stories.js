import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Comparator from './index'

const Decorator = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  align-content: center;
`
storiesOf('Comparator')
  .addDecorator(story => <Decorator>{story()}</Decorator>)
  .add('default Comparator', () =>
    <Comparator />
  )
  .add('Comparator with Georgia font', () =>
    <Comparator typeface='Georgia, serif' />
  )
