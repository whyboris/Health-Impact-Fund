import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "how.title" })} />

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
        <path
          d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
          fill="#222222"
        />
      </svg>
    </div>

    <h1 id="summary">
      <FormattedMessage id="how.in_short" />
    </h1>

    <p>
      <FormattedMessage id="how.in_short_intro" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.in_short_1" />
      </strong>
      <br />
      <FormattedMessage id="how.in_short_1_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.in_short_2" />
      </strong>
      <br />
      <FormattedMessage id="how.in_short_2_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.in_short_3" />
      </strong>
      <br />
      <FormattedMessage id="how.in_short_3_answer" />
    </p>

    <h1 id="background">
      <FormattedMessage id="how.background" />
    </h1>
    <p>
      <strong>
        <FormattedMessage id="how.background_1" />
      </strong>
      <br />
      <FormattedMessage id="how.background_1_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.background_2" />
      </strong>
      <br />
      <FormattedMessage id="how.background_2_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.background_3" />
      </strong>
      <br />
      <FormattedMessage id="how.background_3_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.background_4" />
      </strong>
      <br />
      <FormattedMessage id="how.background_4_answer" />
    </p>

    <h1 id="essence">
      <FormattedMessage id="how.essence" />
    </h1>
    <p>
      <strong>
        <FormattedMessage id="how.essence_1" />
      </strong>
      <br />
      <FormattedMessage id="how.essence_1_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.essence_2" />
      </strong>
      <br />
      <FormattedMessage id="how.essence_2_answer" />
    </p>
    <p>
      <strong>
        <FormattedMessage id="how.essence_3" />
      </strong>
      <br />
      <FormattedMessage id="how.essence_3_answer" />
    </p>
  </Layout>
)

export default injectIntl(Benefits)
