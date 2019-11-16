import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => {
  let showLongDescription1 = false
  let showLongDescription2 = false

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "benefits.title" })}
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
          <path
            d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
            fill="#222222"
          />
        </svg>
      </div>

      <h1 id="advantages">
        <FormattedMessage id="benefits.advantages_for" /> ...
      </h1>

      <strong style={{ display: "block", "margin-top": "40px" }}>
        ... <FormattedMessage id="benefits.patients" />:
      </strong>

      <ul className="benefits-list">
        <li>
          <FormattedMessage id="benefits.patients_1" />

          <strong
            className="see-more-click"
            style={{ display: "inline-block" }}
            onClick={() => {
              if (!showLongDescription1) {
                document.getElementById("first").classList.remove("hidden")
              } else {
                document.getElementById("first").classList.add("hidden")
              }
              showLongDescription1 = !showLongDescription1
            }}
          >
            <FormattedMessage id="benefits.see_more" />
          </strong>
        </li>

        <p
          id="first"
          style={{ margin: "0" }}
          className="description-long hidden"
        >
          <FormattedMessage id="benefits.show_more_1" />
        </p>

        <li>
          <FormattedMessage id="benefits.patients_2" />

          <strong
            className="see-more-click"
            style={{ display: "inline-block" }}
            onClick={() => {
              if (!showLongDescription2) {
                document.getElementById("second").classList.remove("hidden")
              } else {
                document.getElementById("second").classList.add("hidden")
              }
              showLongDescription2 = !showLongDescription2
            }}
          >
            <FormattedMessage id="benefits.see_more" />
          </strong>
        </li>

        <p
          id="second"
          style={{ margin: "0" }}
          className="description-long hidden"
        >
          <FormattedMessage id="benefits.show_more_2" />
        </p>
      </ul>
      <strong>
        ... <FormattedMessage id="benefits.industry" />:
      </strong>
      <br />
      <ul className="benefits-list">
        <li>
          <FormattedMessage id="benefits.industry_1" />
        </li>
        <li>
          <FormattedMessage id="benefits.industry_2" />
        </li>
        <li>
          <FormattedMessage id="benefits.industry_3" />
        </li>
        <li>
          <FormattedMessage id="benefits.industry_4" />
        </li>
        <li>
          <FormattedMessage id="benefits.industry_5" />
        </li>
      </ul>
      <strong>
        ... <FormattedMessage id="benefits.state" />:
      </strong>
      <br />
      <ul className="benefits-list">
        <li>
          <FormattedMessage id="benefits.state_1" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_2" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_3" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_4" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_5" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_6" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_7" />
        </li>
        <li>
          <FormattedMessage id="benefits.state_8" />
        </li>
      </ul>
    </Layout>
  )
}

export default injectIntl(Benefits)
