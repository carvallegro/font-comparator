import React from 'react'
import { storiesOf } from '@storybook/react'

import { SiteTitle, SubTitle } from './index'

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
