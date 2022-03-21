import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div`
  display: grid;
  place-content: center;
  width: ${({ theme }) => rem(56, theme.fonts.baseSize)};
  height: ${({ theme }) => rem(56, theme.fonts.baseSize)};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grey};
  border: 0.5px solid ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 26px;
`
