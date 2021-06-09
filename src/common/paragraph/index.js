import React from 'react'
import PropTypes from 'prop-types'

import { ParagraphStyled } from './style'

const ParagraphJSX = ({theme, children}) => <ParagraphStyled theme={theme}>{children}</ParagraphStyled>
ParagraphJSX.propTypes = {
  theme: PropTypes.object.isRequired
}

export default ParagraphJSX
