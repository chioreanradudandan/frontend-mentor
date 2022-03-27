import React from 'react'
import { ReactComponent as Logo } from '../common/assets/logo.svg'
import * as Layout from './components/styled/layout'
import { ColorSection, TypographySection } from './components'

const DesignSystemPage = () => (
  <Layout.Page>
    <Layout.Header>
      <Logo />
    </Layout.Header>
    <Layout.Main>
      <ColorSection />
      <TypographySection />
    </Layout.Main>
  </Layout.Page>
)

export default DesignSystemPage
