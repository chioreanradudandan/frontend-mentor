import React from 'react'
import { ReactComponent as Logo } from '../common/assets/logo.svg'
import * as Layout from './components/styled/layout'
import { HeroSection, MainSection, FooterSection } from './components'

const LandingPage = () => (
  <Layout.Page>
    <Layout.Header>
      <Logo />
      <HeroSection />
    </Layout.Header>
    <Layout.Main>
      <MainSection />
    </Layout.Main>
    <Layout.Footer>
      <FooterSection />
    </Layout.Footer>
  </Layout.Page>
)

export default LandingPage
