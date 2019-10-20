import React from "react"
import {
  // FormattedMessage,
  injectIntl,
} from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
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

    <div className="scroll-to-top" onClick={ () => { window.scrollTo(0, 0); }}>
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

    <strong>... patients.</strong>
    <br />
    <ul>
      <li>Expanded arsenal of available medicines.</li>
      <li>Cutting-edge pharmaceuticals at affordable prices.</li>
    </ul>
    <strong>... pharmaceutical innovators.</strong>
    <br />
    <ul>
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
        Realization of the internationally agreed Sustainable Development Goals.
      </li>
    </ul>
    <strong>... states and taxpayers.</strong>
    <br />
    <ul>
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

export default injectIntl(Benefits)
