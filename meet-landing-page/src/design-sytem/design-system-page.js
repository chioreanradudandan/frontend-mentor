import React from 'react'
import { Page, NumberedTitle } from '../common/components'
import { ColorSection } from './components'

const DesignSystemPage = () => (
  <Page>
    <NumberedTitle number="01" title="colors" />
    <ColorSection />

    <NumberedTitle number="02" title="typography" />
  </Page>
)

export default DesignSystemPage
