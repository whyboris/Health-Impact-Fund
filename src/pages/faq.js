import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "../components/scrolltotop"

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

const FAQ = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "faq.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <h1 id="faq">
      <FormattedMessage id="faq.heading" />
    </h1>

    {questions.map(element => {
      return (
        <p key={element}>
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

export default injectIntl(FAQ)
