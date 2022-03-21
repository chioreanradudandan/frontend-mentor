import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div``

export const ColorContainer = styled.div`
  min-height: ${rem(112)};
  padding: ${rem(70)} 0 0 ${rem(24)};
  color: ${({ textColor }) => (textColor === 'light' ? '#FFFFFF' : '#28283D')};
  background-color: ${({ color }) => color};
  border-radius: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  gap: ${rem(32)};
  margin-top: ${rem(16)};
`

export const TextLabel = styled.span`
  color: #87879d;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

export const TextValue = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
