import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => {
  const lol = {
    first: false,
    second: false
  }

  function handleClick(selector) {
    if (!lol[selector]) {
      document.getElementById(selector).classList.remove("hidden")
    } else {
      document.getElementById(selector).classList.add("hidden")
    }
    lol[selector] = !lol[selector]
  }

  function handleKeydown(event, selector) {
    if (event.keyCode === 13) {
      handleClick(selector);
    }
  }

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "what.title" })}
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
        <FormattedMessage id="what.title" />
      </h1>

      <p>
        <FormattedMessage id="what.intro" />
      </p>
      <strong>
        <FormattedMessage id="what.how" />
      </strong>
      <p>
        <FormattedMessage id="what.how_answer" />
      </p>
      <strong>
        <FormattedMessage id="what.prices" />
      </strong>
      <p>
        <FormattedMessage id="what.prices_answer" />{" "}
      </p>

      <strong
        className="see-more-click"
        role="button"
        tabIndex="0"
        onClick={() => handleClick('first')}
        onKeyDown={(event) => handleKeydown(event, 'first')}
      >
        <FormattedMessage id="what.see_more" />
      </strong>

      <p id="first" className="description-long hidden">
        <FormattedMessage id="what.prices_see_more" />
      </p>

      <p style={{ textAlign: "center" }}>
        <FormattedMessage id="what.for_more_info_see" />{" "}
        <a
          className="see-more-click"
          style={{ display: "inline-block" }}
          href="/pdf/DP1_Hollis.pdf"
        >
          <FormattedMessage id="what.document" />
        </a>
      </p>

      <p>
        <strong>
          <FormattedMessage id="what.reward" />
        </strong>
        <br />
        <FormattedMessage id="what.reward_answer" />
      </p>

      <strong
        className="see-more-click"
        role="button"
        tabIndex="0"
        onClick={() => handleClick('second')}
        onKeyDown={(event) => handleKeydown(event, 'second')}
      >
        <FormattedMessage id="what.see_more" />
      </strong>

      <p id="second" className="description-long hidden">
        <FormattedMessage id="what.reward_see_more" />
      </p>
    </Layout>
  )
}

export default injectIntl(Benefits)
