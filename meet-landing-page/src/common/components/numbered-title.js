import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/numbered-title'
import CircleNumber from './circle-number'

const NumberedTitle = ({ number, title }) => (
  <Styled.Container>
    <CircleNumber number={number} />
    <Styled.Title>{title}</Styled.Title>
  </Styled.Container>
)

NumberedTitle.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NumberedTitle
