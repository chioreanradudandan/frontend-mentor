import styled from 'styled-components'
import { rem, em } from 'polished'

export const Container = styled.div`
  text-align: center;
  margin-bottom: ${em(64)};
`

export const CardsContainer = styled.div`
  display: grid;
  gap: ${rem(25)};
  margin-block: ${em(64)};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`
export const CardImage = styled.div`
  border-radius: 8px;

  > img {
    max-width: 100%;
    border-radius: 8px;
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
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 26px;
`
