import React from 'react'
import { Button } from '../../common/components'
import * as Styled from './styled/hero-section'

const HeroSection = () => (
  <Styled.Container>
    <Styled.HeroImage />
    <Styled.HeroImgLeft />
    <Styled.HeroContent>
      <Styled.Title>Group Chat for Everyone</Styled.Title>
      <Styled.Description>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </Styled.Description>
      <Styled.ButtonsContainer>
        <Button type="primary">
          Download
          <span>v1.3</span>
        </Button>
        <Button>What is it?</Button>
      </Styled.ButtonsContainer>
    </Styled.HeroContent>
    <Styled.HeroImgRight />
  </Styled.Container>
)

export default HeroSection
