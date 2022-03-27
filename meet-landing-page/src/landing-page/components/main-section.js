import React from 'react'
import { CircleNumberLine } from '../../common/components'
import img1 from '../../common/assets/desktop/image-woman-in-videocall.jpg'
import img2 from '../../common/assets/desktop/image-women-videochatting.jpg'
import img3 from '../../common/assets/desktop/image-men-in-meeting.jpg'
import img4 from '../../common/assets/desktop/image-man-texting.jpg'
import * as Styled from './styled/main-section'

const MainSection = () => (
  <Styled.Container>
    <CircleNumberLine number="01" />
    <Styled.CardsContainer>
      <Styled.CardImage>
        <img src={img1} alt="" srcSet="" />
      </Styled.CardImage>
      <Styled.CardImage>
        <img src={img2} alt="" srcSet="" />
      </Styled.CardImage>
      <Styled.CardImage>
        <img src={img3} alt="" srcSet="" />
      </Styled.CardImage>
      <Styled.CardImage>
        <img src={img4} alt="" srcSet="" />
      </Styled.CardImage>
    </Styled.CardsContainer>

    <Styled.SubHeading>Built for modern use</Styled.SubHeading>
    <Styled.Heading>Smarter meetings, all in one place</Styled.Heading>
    <Styled.Text>
      Send messages, share files, show your screen, and record your meetings —
      all in one workspace. Control who can join with invite-only team access,
      data encryption, and data export.
    </Styled.Text>
  </Styled.Container>
)

export default MainSection
