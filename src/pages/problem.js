import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "problem.title" })}
    />

    <div
      className="scroll-to-top"
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
        <g clipPath="url(#clip0)">
          <path
            d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
            fill="#222222"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="9.89474" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <h1 id="summary">The problem</h1>

    <p>
      The diseases mainly suffered by poor people don’t attract much attention
      from investors, who can earn more from drugs that treat the diseases of
      rich people. So people with diseases like malaria, tuberculosis or
      schistosomiasis, lack treatment options, or in some cases lack treatments
      at all.
    </p>
    <p>
      When new drugs are developed, the prices are often too high for poor
      people. This problem is particularly painful since the actual cost of
      manufacturing is generally quite low, and prices are kept artificially
      high so that investors can earn profits. The usual justification is that
      without high prices, there will be no incentive for investment in
      innovation. But this justification does no good for people who can’t
      afford to buy drugs at high prices.
    </p>
    <p>
      What is needed here is a better way of paying for innovation, one that
      decouples the price from the fixed cost of research and development.
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
