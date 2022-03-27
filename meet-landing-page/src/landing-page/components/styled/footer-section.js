import styled from 'styled-components'
import { em } from 'polished'
import backgroundImage from '../../../common/assets/desktop/image-footer.jpg'

export const Container = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`

export const Background = styled.div`
  top: 105px;
  left: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: url(${backgroundImage}) center no-repeat;
  background-size: cover;
  padding: 2rem;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
    z-index: -1;
  }
`

export const Heading = styled.h1`
  margin-top: ${em(32)};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 26px;
`
