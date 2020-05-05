import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "problem.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <div
      className="scroll-to-top"
      role="button"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
          fill="#222222"
        />
      </svg>
    </div>

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
