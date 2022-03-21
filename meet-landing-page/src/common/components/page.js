import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/page'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Page = ({ children }) => (
  <Styled.Page>
    <Styled.Header>
      <Logo />
      Design system
    </Styled.Header>
    <Styled.Main>{children}</Styled.Main>
    <Styled.Footer>Footer</Styled.Footer>
  </Styled.Page>
)

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Page
