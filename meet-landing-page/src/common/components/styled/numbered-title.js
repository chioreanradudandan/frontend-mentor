import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(64)};
`

export const Title = styled.div`
  margin-left: ${rem(31.5)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: capitalize;
`
