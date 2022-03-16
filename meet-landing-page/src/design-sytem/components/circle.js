import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/circle'

const Circle = ({ children }) => <Styled.Circle>{children}</Styled.Circle>

Circle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
export default Circle
