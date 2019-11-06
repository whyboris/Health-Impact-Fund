import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Knowledge = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "videos" })}
    />
    <h1>
      <FormattedMessage id="videos" />
    </h1>

    <div className="video-container">
      <iframe
        title="Medicine for the 99 percent"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/rTMqGbTNkNg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <br />
    <br />

    <p>More videos will be posted soon.</p>
    <br />
    <br />

  </Layout>
)

export default injectIntl(Knowledge)
