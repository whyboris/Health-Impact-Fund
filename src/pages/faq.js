import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const questions = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
  "q11",
  "q12",
]

const Benefits = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "faq.title" })} />

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

    <h1 id="faq">
      <FormattedMessage id="faq.heading" />
    </h1>

    {questions.map(element => {
      return (
        <p>
          <strong>
            <FormattedMessage id={"faq." + element} />
          </strong>
          <br />
          <FormattedMessage id={"faq." + element + "_answer"} />
        </p>
      )
    })}

    <p>
      <strong>
        <FormattedMessage id="faq.support_us" />
      </strong>
      <br />
      <FormattedMessage id="faq.support_us_email" />
    </p>
  </Layout>
)

export default injectIntl(Benefits)
