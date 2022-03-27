import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/button'

const Button = ({ children, ...props }) => (
  <Styled.Container {...props}>{children}</Styled.Container>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Button
