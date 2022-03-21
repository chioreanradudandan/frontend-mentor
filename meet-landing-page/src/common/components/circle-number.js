import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/circle-number'

const CircleNumber = ({ number }) => (
  <Styled.Container>{number}</Styled.Container>
)

CircleNumber.propTypes = {
  number: PropTypes.string.isRequired,
}
export default CircleNumber
