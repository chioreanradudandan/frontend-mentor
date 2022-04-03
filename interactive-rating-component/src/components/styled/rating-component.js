import styled from 'styled-components'
import { ReactComponent as StarIconSvg } from '../../assets/icon-star.svg'
import { ReactComponent as ThankYouSvg } from '../../assets/illustration-thank-you.svg'

export const StarIcon = StarIconSvg
export const ThankYouImg = ThankYouSvg
export const BeforeSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(327px - 1.6rem);
  max-width: calc(412px - 1.6rem);
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
`

export const AfterSubmitContainer = styled(BeforeSubmitContainer)`
  align-items: center;
  text-align: center;
`

export const Header = styled.h2`
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  line-height: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 14px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.mediumGrey};
  background-color: ${({ theme }) => theme.colors.darkBlue};
`

export const RatingCircleContainer = styled(CircleContainer)`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.mediumGrey};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.lightGrey : theme.colors.darkBlue};

  :hover {
    cursor: ${({ isSelected }) => !isSelected && `pointer`};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, isSelected }) =>
      !isSelected && theme.colors.orange};
  }
`

export const RateContainer = styled.div`
  margin: 1.6rem auto 2.1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  padding: 0.9rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  text-transform: uppercase;
  border-radius: 22.5px;

  :hover {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    color: ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const FinalRatingContainer = styled.div`
  margin: 1.6rem;
  padding: 0.8rem 1rem;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 22.5px;
`
