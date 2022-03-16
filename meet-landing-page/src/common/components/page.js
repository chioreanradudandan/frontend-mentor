import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled/page'

const Page = ({ children }) => (
  <Styled.Page>
    <Styled.Header>header</Styled.Header>
    <Styled.LeftSide>Left side</Styled.LeftSide>
    <Styled.Main>{children}</Styled.Main>
    <Styled.RightSide>Right side</Styled.RightSide>
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
