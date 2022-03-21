import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(64)} 0;
`

export const Title = styled.div`
  margin-left: ${rem(31.5)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: capitalize;
`
