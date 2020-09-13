import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Advisor from "../components/advisor"
import Layout from "../components/layout"
import SEO from "../components/seo"

const { management, managementImages } = require("../components/constants");

const Benefits = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={"Donate"}
      description={"Donate to HIF today"}
    />

    <h1 id="summary">
      <FormattedMessage id="intro.button_donate" />
    </h1>

    <h2>Why your donation is important for global health</h2>

    <p>
      The Health Impact Fund offers a unique model to achieve big gains in
      global health. We are working hard to bring it to reality but we need your
      help! Incentives for Global Health is a registered charity with 501(c)(3)
      status in the US — so we will be happy to send you a personal thank you
      and a tax receipt.
    </p>
    <p>
      For the remainder of 2020, an anonymous donor has offered to match
      donations made through this website one for one, so you can effectively
      double your donation.
    </p>
    <p>If you can, we urge you to donate monthly.</p>

    <div className="three-buttons donate-page-button-container">
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
        <button className="button">
          <FormattedMessage id="intro.button_donate" />
        </button>
      </a>
    </div>

    <p>
      If pharmaceutical innovation has been important in your life, you know
      what a big difference it can make. The Health Impact Fund can help to
      bring pharmaceutical innovation at affordable prices to everyone.
    </p>
    <p>Thank you for your commitment to global health!</p>


    <h1 id="management" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.management_team" />
    </h1>
    <ul className="team-list team-list-with-photo">
      {management.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 300, image: managementImages[index] }} />
      })}
    </ul>

  </Layout>
)

export default injectIntl(Benefits)
