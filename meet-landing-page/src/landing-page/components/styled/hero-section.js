import styled from 'styled-components'
import mobileAndTabletImage from '../../../common/assets/tablet/image-hero.png'

export const Container = styled.div`
  width: 100%;
`

export const HeroImage = styled.div`
  background: url(${mobileAndTabletImage}) no-repeat center;
  background-size: cover;
  margin-block: 2rem;
  min-height: 150px;
  width: 100%;
`

export const HeroContent = styled.div`
  margin-inline: 5%;
  text-align: center;
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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
