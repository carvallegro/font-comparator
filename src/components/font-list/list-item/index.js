import React from 'react'

import { Wrapper, FontName, FontUrl } from './style'

const FontItemJSX = () => <Wrapper>
  <FontName>Font Name</FontName>
  <FontUrl>@import url(<span>'https://fonts.googleapis.com/css?family=Open+Sans'</span>);</FontUrl>
</Wrapper>

export default FontItemJSX
