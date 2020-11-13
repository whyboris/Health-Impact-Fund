import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Advisor from "../components/advisor"
import AdvisorSimple from "../components/advisorsimple"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "../components/scrolltotop"
import Translator from "../components/translator"

const {
  advisors,
  board,
  boardImages,
  former_advisors,
  management,
  managementEmails,
  managementImages,
  scientific_advisors,
  translators,
} = require("../components/constants");

const Team = ({ intl }) => (
  <Layout>

    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "team.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <h1>
      <FormattedMessage id="team.heading" />
    </h1>
    <FormattedMessage
      id="team.about_IGH"
      values={{
        intl_HIP: (
          <>
            <em>Health Impact Fund</em>
          </>
        ),
        intl_volunteers: (
          <>
            <a href="#opportunities">
              <FormattedMessage id="team.volunteers" />
            </a>
          </>
        ),
      }}
    >
      {(...chunks) => <p>{chunks}</p>}
    </FormattedMessage>
    <FormattedMessage
      id="team.about_IGH_more"
      values={{
        intl_email: (
          <>
            <a href="mailto:info@healthimpactfund.org">
              info@healthimpactfund.org
            </a>
          </>
        ),
        intl_donation: (
          <>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
              <FormattedMessage id="team.donation" />
            </a>
          </>
        ),
      }}
    >
      {(...chunks) => <p>{chunks}</p>}
    </FormattedMessage>

    {/* ======================================================================================== */}

    <h1 id="board" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.board" />
    </h1>
    <ul className="team-list">
      {board.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 200, image: boardImages[index]  }} />
      })}
    </ul>

    <h1 id="management" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.management_team" />
    </h1>
    <ul className="team-list team-list-with-photo">
      {management.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 300, image: managementImages[index], email: managementEmails[index] }} />
      })}
    </ul>

    <h1 id="advisory" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.advisory_council" />
    </h1>
    <ul className="team-list team-list-no-desc">
      {advisors.map((element, index) => {
        return <AdvisorSimple key={index} data={{ name: element, id: index }} />
      })}
    </ul>

    <h1 id="former" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.former_advisory_council" />
    </h1>
    <ul className="team-list  team-list-no-desc">
      {former_advisors.map((element, index) => {
        return <AdvisorSimple key={index} data={{ name: element, id: index + 50 }} />
      })}
    </ul>

    <h1 id="scientific" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.scientific_advisory_board" />
    </h1>
    <ul className="team-list team-list-no-desc">
      {scientific_advisors.map((element, index) => {
        return <AdvisorSimple key={index} data={{ name: element, id: index + 100 }} />
      })}
    </ul>

    <h1 id="translators" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.translators" />
    </h1>
    <ul className="team-list team-list-no-desc">
      {translators.map((element, index) => {
        return <Translator key={index} data={{ name: element[0], language: element[1], id: index + 150 }} />
      })}
    </ul>

    {/* ======================================================================================== */}

    <h1 id="opportunities" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.opportunities" />
    </h1>
    <p>
      <FormattedMessage id="team.opportunity_intro" />
    </p>
    <ul className="opportunities-list">
      <li>
        <FormattedMessage id="team.opportunity_1" />
      </li>
      <li>
        <FormattedMessage id="team.opportunity_2" />
      </li>
      <li>
        <FormattedMessage id="team.opportunity_3" />
      </li>
      <li>
        <FormattedMessage id="team.opportunity_4" />
      </li>
    </ul>
    <p>
      <FormattedMessage id="team.opportunity_postscript" />
    </p>
    <FormattedMessage
      id="team.invitation"
      values={{
        intl_email: (
          <>
            <a href="mailto:info@healthimpactfund.org">
              info@healthimpactfund.org
            </a>
          </>
        ),
      }}
    >
      {(...chunks) => <p>{chunks}</p>}
    </FormattedMessage>
  </Layout>
)

export default injectIntl(Team)
