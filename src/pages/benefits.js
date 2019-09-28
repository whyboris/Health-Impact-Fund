import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "benefits.title" })} />
    <h1>
      <FormattedMessage id="benefits.heading" />
    </h1>
    <p>
      <FormattedMessage id="benefits.info" />
    </p>
  </Layout>
)

export default injectIntl(SecondPage)
