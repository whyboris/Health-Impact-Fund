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
        title={intl.formatMessage({ id: "what.title" })}
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

      <h1 id="summary">What is the HIF?</h1>

      <p>
        The Health Impact Fund is intended to provide a complementary system for
        the development of pharmaceutical innovations – especially ones intended
        for poor patients who cannot afford expensive medicines.
      </p>
      <strong>How does it work?</strong>
      <p>
        The Health Impact Fund will be financed by states and charitable
        foundations. It would give pharmaceutical innovators the option of
        registering any new product for annual reward payments.
      </p>
      <strong>Prices</strong>
      <p>
        The price of any product registered with the HIF is limited to the costs
        of manufacture and distribution, and therefore affordable even for poor
        patients. The price of registered medicines is delinked from their R&D
        cost. One way to keep prices down is to enable generic manufacturers to
        compete in producing and selling registered drugs.
      </p>

      <strong
        className="see-more-click"
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

      <p id="first" className="description-long hidden">
        Usually, once drugs become generic, prices fall substantially since
        generic manufacturers compete to sell identical products. Generic
        competition may not work in all situations, so the HIF might use other
        tools to ensure low prices, including tendering or regulated prices.
      </p>

      <p style={{ 'text-align': 'center' }}>
        For much more information on price determination, see{" "}
        <a className="see-more-click" style={{ display: 'inline-block' }} href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP1_Hollis.pdf">
          document
        </a>
      </p>

      <p>
        <strong>Reward payments</strong>
        <br />
        The reward payments received by pharmaceutical innovators depend solely
        on the annual health gains achieved by their registered medicines. The
        more such a new medicine improves or lengthens human lives, the more
        money goes to its innovator.
      </p>

      <strong
        className="see-more-click"
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

      <p id="second" className="description-long hidden">
        An important part of the HIF model is that the HIF should pay out a
        fixed amount in every year. Registered products obtain a share of the
        fixed payout equal to their share of assessed health impact of all
        registered products annually. Thus, firms are essentially competing to
        improve human health. A product that had a Having a fixed total payout
        divided between firms helps the HIF (and funders) to manage its budget.
        Each registered product would be eligible for ten years of payments,
        which resembles the duration of exclusivity that firms now enjoy for
        patented pharmaceuticals. Following the 10 years, products would be
        required to be licensed for generic production.
      </p>
    </Layout>
  )
}

export default injectIntl(Benefits)
