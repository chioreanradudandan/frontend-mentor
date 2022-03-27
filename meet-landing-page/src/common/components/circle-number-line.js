import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/circle-number-line'

const CircleNumberLine = ({ number }) => (
  <Styled.Container>
    <Styled.CircleNumberLine>{number}</Styled.CircleNumberLine>
  </Styled.Container>
)

CircleNumberLine.propTypes = {
  number: PropTypes.string.isRequired,
}
export default CircleNumberLine
