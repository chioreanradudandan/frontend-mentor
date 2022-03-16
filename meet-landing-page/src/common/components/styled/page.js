import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  height: 100vh;
`

export const Header = styled.header`
  padding: 2rem;
  grid-column: 1 / 4;
  background: lightpink;
`

export const LeftSide = styled.div`
  background: lightblue;
  grid-column: 1 / 2;
  padding: 1rem;
`

export const Main = styled.main`
  background: coral;
  grid-column: 2 / 3;
`

export const RightSide = styled.div`
  background: yellow;
  grid-column: 3 / 4;
  padding: 1rem;
`
export const Footer = styled.footer`
  background: wheat;
  grid-column: 1 / 4;
`
