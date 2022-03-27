import styled from 'styled-components'
import { em } from 'polished'
import backgroundImage from '../../../common/assets/desktop/image-footer.jpg'

export const Container = styled.div`
  margin-block: ${em(100)};
`

export const Image = styled.div`
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  min-height: 308px;
  position: relative;
  padding: ${em(95)};
  z-index: 1;

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

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

export const Title = styled.div`
  width: 270px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`

export const Text = styled.div`
  width: 430px;
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.fontSizes.m};
`
