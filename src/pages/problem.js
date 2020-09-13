import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "../components/scrolltotop"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "problem.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <h1 id="summary">
      <FormattedMessage id="problem.title" />
    </h1>

    <p>
      <FormattedMessage id="problem.p1" />
    </p>
    <p>
      <FormattedMessage id="problem.p2" />
    </p>
    <p>
      <FormattedMessage id="problem.p3" />
    </p>

    <div className="three-buttons">
      <Link to="/what">
        <div className="button">
          <FormattedMessage id="navigation.what" />
        </div>
      </Link>

      <Link to="/how">
        <div className="button">
          <FormattedMessage id="navigation.how" />
        </div>
      </Link>

      <Link to="/benefits">
        <div className="button">
          <FormattedMessage id="navigation.benefits" />
        </div>
      </Link>
    </div>
  </Layout>
)

export default injectIntl(Benefits)
