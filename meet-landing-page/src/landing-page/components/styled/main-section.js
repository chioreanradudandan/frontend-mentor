import styled from 'styled-components'
import { rem, em } from 'polished'

export const Container = styled.div`
  margin-bottom: ${em(64)};
`

export const CardsContainer = styled.div`
  display: grid;
  gap: ${rem(25)};
  margin: ${em(64)} auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  @media only screen and (min-width: 830px) {
    max-width: 1100px;
  }
`
export const CardImage = styled.div`
  border-radius: 8px;

  > img {
    max-width: 100%;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 830px) {
    max-width: 573px;
  }
`

export const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};

  @media only screen and (min-width: 768px) {
    padding-inline: 4em;
  }
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 26px;
`
