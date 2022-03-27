import styled from 'styled-components'
import * as CircleContainerSyles from './circle-number'

export const Container = styled.div`
  display: grid;
  place-items: center;
`

export const CircleNumberLine = styled(CircleContainerSyles.Container)`
  position: relative;
  margin-top: 84px;

  :after {
    position: absolute;
    top: -84px;
    left: 0;
    right: 0;
    margin: auto;
    content: '';
    height: 84px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`
