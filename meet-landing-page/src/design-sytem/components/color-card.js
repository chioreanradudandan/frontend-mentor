import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/color-card'

const TEXT_COLOR_TYPES = {
  LIGHT: 'light',
  DARK: 'dark',
}

const ColorCard = ({ color, rgbValue, hslValue, textColor }) => (
  <Styled.Container>
    <Styled.ColorContainer color={color} textColor={textColor}>
      {color}
    </Styled.ColorContainer>
    <Styled.TextContainer>
      <Styled.TextLabel>RGB</Styled.TextLabel>
      <Styled.TextValue>{rgbValue}</Styled.TextValue>
    </Styled.TextContainer>
    <Styled.TextContainer>
      <Styled.TextLabel>HSL</Styled.TextLabel>
      <Styled.TextValue>{hslValue}</Styled.TextValue>
    </Styled.TextContainer>
  </Styled.Container>
)

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
  rgbValue: PropTypes.string.isRequired,
  hslValue: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf(TEXT_COLOR_TYPES).isRequired,
}

export default ColorCard
