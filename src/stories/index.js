import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { storiesOf } from '@storybook/react'

import Paragraph from '../common/paragraph'
import Heading from '../common/heading'

import { SiteTitle, SubTitle } from '../components/site-title'
import { HomepageJSX } from '../components/homepage'
import { ComparatorPageJSX } from '../components/comparator-page'

import theme from '../theme'

injectGlobal`
  body {
    margin: 0;
    color: #333;
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  } 
`

const customTheme = {
  width: '33em',
  fontSize: '18px',
  color: '#333',
  lineHeight: '1.4em'
}
storiesOf('Typography', module)
  .add('paragraph', () =>
    <Paragraph theme={customTheme}>
      One of the most important things in typography is to shape a seamless reading experience that invites the reader
      and presents the content in an objective way. To do that, we need to be able to shape perfect paragraphs. There
      are three keys to doing that, as Josef Mueller-Brockmann—a renowned 20th-century typographer and visual
      communicator, put it:
      "The reader should be able to read the message of a text easily and comfortably. This depends to a not
      inconsiderable extent on the size of the type, the length of the lines and the leading (line-height)."
      — Josef Mueller–Brockmann
    </Paragraph>)
  .add('headers', () => [
    <Heading level={1} key={1} theme={customTheme}>H1 : I'm learning typography</Heading>,
    <Heading level={2} key={2} theme={customTheme}>H2 : I'm learning typography</Heading>,
    <Heading level={3} key={3} theme={customTheme}>H3 : I'm learning typography</Heading>,
    <Heading level={4} key={4} theme={customTheme}>H4 : I'm learning typography</Heading>,
    <Heading level={5} key={5} theme={customTheme}>H5 : I'm learning typography</Heading>,
    <Heading level={6} key={6} theme={customTheme}>H6 : I'm learning typography</Heading>
  ])

storiesOf('Site titles', module)
  .add('Site Title', () =>
    <SiteTitle theme={{
      siteTitle: {
        fontSize: '50px',
        color: 'red'
      }
    }}>
      This is a Site title
    </SiteTitle>
  )
  .add('Site Sub Title', () =>
    <SubTitle theme={{
      subTitle: {
        fontSize: '40px',
        color: 'orange'
      }
    }}>
      This is a Site title
    </SubTitle>
  )

storiesOf('Main Page', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Homepage JSX', () =>
    <HomepageJSX />
  )

storiesOf('Comparator Page', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('ComparatorPage JSX', () =>
    <ComparatorPageJSX />
  )

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
