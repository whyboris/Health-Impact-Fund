import React from "react"
import { FormattedMessage, injectIntl, navigate } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_page2" })} />
    <h1>
      <FormattedMessage id="about.heading" />
    </h1>
    <p>
      <FormattedMessage id="about.info" />
    </p>
  </Layout>
)

export default injectIntl(SecondPage)
