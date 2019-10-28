import React from "react"
import {
  // FormattedMessage,
  injectIntl,
} from "gatsby-plugin-intl"

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
      {/* <h1>
      <FormattedMessage id="benefits.heading" />
    </h1> */}
      {/* <p>
      <FormattedMessage id="benefits.info" />
    </p> */}

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

      <h1 id="advantages">Advantages for …</h1>

      <strong style={{ display: 'block', 'margin-top': '40px' }}>... patients.</strong>

      <ul className="benefits-list">
        <li>
          Expanded arsenal of available medicines.
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
            See more
          </strong>
        </li>

        <p
          id="first"
          style={{ margin: "0" }}
          className="description-long hidden"
        >
          The HIF will create incentives for new drugs to be developed that are
          not commercially attractive under the current system but have great
          therapeutic value. The reason is that the HIF is designed so that all
          human lives have the same value, so even drugs that will mainly be
          used for poor patients will offer an attractive investment
          proposition.
        </p>

        <li>
          Cutting-edge pharmaceuticals at affordable prices.
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
            See more
          </strong>
        </li>

        <p
          id="second"
          style={{ margin: "0" }}
          className="description-long hidden"
        >
          The HIF, by design, requires low prices for registered products in all
          participating and low/lower-middle income countries. Unlike the
          current situation where new drugs are priced to maximize profits
          everywhere, HIF-registered drugs will be priced to maximize health
          benefits.
        </p>
      </ul>
      <strong>... pharmaceutical innovators.</strong>
      <br />
      <ul className="benefits-list">
        <li>
          New incentives for essential but heretofore unprofitable R&D projects.
        </li>
        <li>
          The opportunity to help poorer patients without ruining themselves or
        </li>
        <li>those patients financially.</li>
        <li>Enlarged contributions to world health.</li>
        <li>Improved public image.</li>
        <li>
          Realization of the internationally agreed Sustainable Development
          Goals.
        </li>
      </ul>
      <strong>... states and taxpayers.</strong>
      <br />
      <ul className="benefits-list">
        <li>
          Greater chance that patients will receive the medicines that are best
          for them.
        </li>
        <li>Much improved efficiency in the health sector.</li>
        <li>Reduced dangers from invasive diseases of the poor.</li>
        <li>Improvements in global health.</li>
        <li>Reduction of the economic burdens from disease.</li>
        <li>
          Gains in epidemiological knowledge from the required health impact
          assessments.
        </li>
        <li>
          Genuine North-South partnership for the production of global public
          goods.
        </li>
        <li>
          Establishment of a transformative innovation in the promotion of
          innovations
        </li>
      </ul>
    </Layout>
  )
}

export default injectIntl(Benefits)
