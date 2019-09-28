import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "about.title" })} />
    <h1>
      <FormattedMessage id="about.heading" />
    </h1>
    <p>
      <FormattedMessage id="about.info" />
    </p>

    <h2>Health Impact Fund &#8220;mini-HIF&#8221; Proposal</h2>

    <h3>Executive Summary</h3>

    <p class="minihif">
      The Health Impact Fund (HIF) is intended to provide competitive returns to
      firms that develop drugs and vaccines to treat the diseases mostly
      prevalent in low- and middle-income countries. A smaller version – the
      “mini-HIF” – could effectively demonstrate viability of this approach. The
      benefits of supporting the mini-HIF are:
    </p>
    <ul class="minihiful">
      <li>
        Helping to kick-start a transformative, sustainable solution to generate
        incremental revenues from therapies targeted at developing countries.
      </li>
      <li>
        Helping to launch an institution that would increase commercial
        incentives to develop therapies for neglected diseases.
      </li>
      <li>
        Leading a highly visible, innovative global public health initiative
      </li>
    </ul>
    <p class="minihif">
      The most effective mini-HIF would be funded in the range of $60m &#8211;
      $200m, ideally with funding from several sources including foundations and
      governments.
    </p>
    <p class="minihif">
      The mini-HIF would be a competition for pharmaceutical manufacturers and
      PDPs to achieve health impact through an innovative drug, vaccine,
      delivery mechanism or formulation used mainly in low- and middle-income
      countries (a “project”). Firms and PDPs would be invited to bid through a
      Request for Proposals; successful proposals would become eligible for
      rewards based on health impact achieved through the initiative. The
      available reward pool would be divided among the accepted projects in
      proportion to the health impact achieved by each.
    </p>
    <p class="minihif">
      The mini-HIF would create incentives for investment into improving the
      health of poor people. For further details, please get in touch with us at{" "}
      <a href="emailto:contact@healthimpactfund.org">
        contact@healthimpactfund.org
      </a>
    </p>

    <img
      style={{
        margin: '10px auto',
        display: 'block'
      }}
      src="https://healthimpactfund.org/wp-content/uploads/2016/02/miniHIF.jpg"
      alt="Health Impact Fund mini-HIF"
    />

    <h3>Health Impact Fund &#8220;mini-HIF&#8221; Proposal</h3>
    <p>
      This book presents an in-depth overview of the Health Impact Fund&#8217;s
      proposed MiniHIF initiative. The mini-HIF focuses on demonstrating the
      feasibility of rewarding new drugs based on assessed health impact.{" "}
    </p>
    <a href="https://healthimpactfund.org/wp-content/uploads/2016/02/mini-HIF-proposal-2016.pdf">
      Click here to download (English)
    </a>
  </Layout>
)

export default injectIntl(SecondPage)
