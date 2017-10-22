import React from 'react'
import { storiesOf } from '@storybook/react'

import P from './index'

const customTheme = {
  width: '33em',
  fontSize: '18px',
  color: '#333',
  lineHeight: '1.4em'
}
storiesOf('Paragraph', module)
  .add('paragraph', () =>
    <P theme={customTheme}>
      One of the most important things in typography is to shape a seamless reading experience that invites the reader
      and presents the content in an objective way. To do that, we need to be able to shape perfect paragraphs. There
      are three keys to doing that, as Josef Mueller-Brockmann—a renowned 20th-century typographer and visual
      communicator, put it:
      "The reader should be able to read the message of a text easily and comfortably. This depends to a not
      inconsiderable extent on the size of the type, the length of the lines and the leading (line-height)."
      — Josef Mueller–Brockmann
    </P>)
