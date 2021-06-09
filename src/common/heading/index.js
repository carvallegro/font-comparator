import React from 'react'
import PropTypes from 'prop-types'

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from './style'

const HeadingJSX = ({theme, level, children}) => {
  switch (level) {
    case 1:
      return <StyledH1 theme={theme}>{children}</StyledH1>
    case 2:
      return <StyledH2 theme={theme}>{children}</StyledH2>
    case 3:
      return <StyledH3 theme={theme}>{children}</StyledH3>
    case 4:
      return <StyledH4 theme={theme}>{children}</StyledH4>
    case 5:
      return <StyledH5 theme={theme}>{children}</StyledH5>
    case 6:
      return <StyledH6 theme={theme}>{children}</StyledH6>
    default:
      return <StyledH1 theme={theme}>{children}</StyledH1>
  }
}

HeadingJSX.propTypes = {
  theme: PropTypes.object.isRequired,
  level: PropTypes.number
}
HeadingJSX.defaultProps = {
  level: 1
}

export default HeadingJSX
