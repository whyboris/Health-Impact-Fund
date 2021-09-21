import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "../components/scrolltotop"

const Benefits = ({ intl }) => {
  const lol = {
    first: false,
    second: false,
    third: false
  }

  function handleClick(selector) {

    const docRef = typeof document !== `undefined` ? document : undefined;
    if (!docRef) { return };

    if (!lol[selector]) {
      docRef.getElementById(selector).classList.remove("hidden")
    } else {
      docRef.getElementById(selector).classList.add("hidden")
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
        title={intl.formatMessage({ id: "benefits.title" })}
        description={intl.formatMessage({ id: "general.description" })}
      />

      <ScrollToTop />

      <h1 id="advantages">
        <FormattedMessage id="benefits.advantages_for" /> ...
      </h1>

      <strong style={{ display: "block", "marginTop": "40px" }}>
        ... <FormattedMessage id="benefits.patients" />:
      </strong>

      {/* ====================================================================================== */}

      <ul className="benefits-list">
        <li>
          <FormattedMessage id="benefits.patients_1" />{" "}
          <strong
            className="see-more-click"
            role="button"
            tabIndex="0"
            style={{ display: "inline-block" }}
            onClick={() => handleClick('first')}
            onKeyDown={(event) => handleKeydown(event, 'first')}
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

      {/* ====================================================================================== */}

        <li>
          <FormattedMessage id="benefits.patients_2" />{" "}
          <strong
            className="see-more-click"
            role="button"
            tabIndex="0"
            style={{ display: "inline-block" }}
            onClick={() => handleClick('second')}
            onKeyDown={(event) => handleKeydown(event, 'second')}
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

      {/* ====================================================================================== */}

        <li>
          <FormattedMessage id="benefits.patients_3" />{" "}
          <strong
            className="see-more-click"
            role="button"
            tabIndex="0"
            style={{ display: "inline-block" }}
            onClick={() => handleClick('third')}
            onKeyDown={(event) => handleKeydown(event, 'third')}
          >
            <FormattedMessage id="benefits.see_more" />
          </strong>
        </li>

        <p
          id="third"
          style={{ margin: "0" }}
          className="description-long hidden"
        >
          <FormattedMessage id="benefits.show_more_3" />
        </p>
      </ul>

      {/* ====================================================================================== */}

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
