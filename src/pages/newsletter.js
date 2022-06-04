import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MailChimpComponent from "../components/mailchimp"

const Newsletter = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "newsletter.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <h1 id="summary">
      <FormattedMessage id="newsletter.title" />
    </h1>

    <p>Sign up for our newsletter.</p>

    <MailChimpComponent></MailChimpComponent>
  </Layout>
)

export default injectIntl(Newsletter)
