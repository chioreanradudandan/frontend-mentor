import React from 'react'
import { NumberedTitle } from '../../common/components'
import * as Styled from './styled/typography-section'

const TypographySection = () => (
  <Styled.Container>
    <NumberedTitle number="02" title="typography" />
    <Styled.Image>
      <Styled.TextContainer>
        <Styled.Title>Red Hat Display</Styled.Title>
        <Styled.Text>
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+
        </Styled.Text>
      </Styled.TextContainer>
    </Styled.Image>
  </Styled.Container>
)

export default TypographySection
