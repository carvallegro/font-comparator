import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { ComparatorPageJSX } from './index'
import theme from '../../theme'

storiesOf('Comparator Page', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Homepage JSX', () =>
    <ComparatorPageJSX />
  )
