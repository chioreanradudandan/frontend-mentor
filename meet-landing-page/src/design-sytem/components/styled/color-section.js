import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.div`
  display: grid;
  grid-column-gap: ${rem(30)};
  grid-row-gap: ${rem(56)};
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
`
