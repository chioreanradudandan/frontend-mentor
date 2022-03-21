import React from 'react'
import ColorCard from './color-card'
import * as Styled from './styled/color-section'

const ColorsSection = () => (
  <Styled.Container>
    <ColorCard
      color="#4D96A9"
      rgbValue="77, 150, 168"
      hslValue="192°, 37%, 48%"
      textColor="light"
    />
    <ColorCard
      color="#855FB1"
      rgbValue="133, 95, 177"
      hslValue="268°, 34%, 53%"
      textColor="light"
    />
    <ColorCard
      color="#28283D"
      rgbValue="40, 40, 61"
      hslValue="240°, 21%, 20%"
      textColor="light"
    />
    <ColorCard
      color="#87879D"
      rgbValue="135, 135, 157"
      hslValue="240°, 10%, 57%"
      textColor="dark"
    />
    <ColorCard
      color="#8FE3F9"
      rgbValue="143, 227, 249"
      hslValue="192°, 90%, 77%"
      textColor="dark"
    />
    <ColorCard
      color="#D9B8FF"
      rgbValue="217, 184, 255"
      hslValue="268°, 100%, 86%"
      textColor="dark"
    />
    <ColorCard
      color="#FAFAFA"
      rgbValue="250, 250, 250"
      hslValue="0°, 0%, 98%"
      textColor="dark"
    />
  </Styled.Container>
)

export default ColorsSection
