import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`Health Impact Fund`, `HIF`, `Global Health`]}
      />

      <div style={{ maxWidth: `600px`, margin: `20px auto` }}>
        <Image />
      </div>

      <h1>
        <FormattedMessage id="intro_hip" />
      </h1>
      <h2>
        <FormattedMessage id="intro_hip_tagline" />
      </h2>
      <p className="center-block">
        <FormattedMessage id="intro_hip_description" />
      </p>

      <Link to="/page-2/">
        <FormattedMessage id="go_page2" />
      </Link>

    </Layout>
  )
}

export default injectIntl(IndexPage)
