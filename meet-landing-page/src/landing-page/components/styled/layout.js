import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 5% 1fr 5%;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  align-items: center;
  grid-column: 1 / 4;
`

export const Main = styled.main`
  grid-column: 2 / 3;
`

export const Footer = styled.footer`
  grid-column: 1 / 4;
`
