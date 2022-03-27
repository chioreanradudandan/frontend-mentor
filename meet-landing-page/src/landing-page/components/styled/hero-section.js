import styled from 'styled-components'
import mobileAndTabletImage from '../../../common/assets/tablet/image-hero.png'
import heroImgLeft from '../../../common/assets/desktop/image-hero-left.png'
import heroImgRight from '../../../common/assets/desktop/image-hero-right.png'

export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 830px) {
    display: flex;
    justify-content: space-between;
  }
`

export const HeroImgLeft = styled.div`
  @media only screen and (max-width: 830px) {
    display: none;
  }

  width: 150px;
  background-color: red;
  background: url(${heroImgLeft}) right;
  background-size: cover;
  width: 350px;
`

export const HeroImgRight = styled.div`
  @media only screen and (max-width: 830px) {
    display: none;
  }

  width: 150px;
  background-color: red;
  background: url(${heroImgRight}) left;
  background-size: cover;
  width: 350px;
`

export const HeroImage = styled.div`
  background: url(${mobileAndTabletImage}) center no-repeat;
  background-size: cover;
  margin-block: 2rem;
  min-height: 150px;
  width: 100%;

  @media only screen and (min-width: 420px) {
    min-height: 303px;
  }

  @media only screen and (min-width: 830px) {
    display: none;
  }
`

export const HeroContent = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  text-align: center;
  max-width: 457px;
`

export const Title = styled.div`
  margin-block: 24px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold}; ;
`

export const Description = styled.div`
  line-height: 26px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

export const ButtonsContainer = styled.div`
  margin-block: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`
