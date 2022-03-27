import React from 'react'
import { CircleNumberLine, Button } from '../../common/components'
import * as Styled from './styled/footer-section'

const FooterSection = () => (
  <Styled.Container>
    <CircleNumberLine number="02" />
    <Styled.Background>
      <Styled.Heading>Experience more together</Styled.Heading>
      <Styled.Text>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </Styled.Text>
      <Button type="secondary">
        Download
        <span>v1.3</span>
      </Button>
    </Styled.Background>
  </Styled.Container>
)

export default FooterSection
