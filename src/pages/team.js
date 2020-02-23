import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Advisor from "../components/advisor"
import AdvisorSimple from "../components/advisorsimple"
import SEO from "../components/seo"

// make sure each has an entry in the en.json & other languages!
const advisors = [
  "Noam Chomsky",
  "John J. DeGioia",
  "Ruth Faden",
  "Paul Farmer",
  "Robert C. Gallo",
  "Professor David Haslam",
  "Paul Martin",
  "Christopher Murray",
  "Gustav Nossal",
  "Baroness Onora O'Neill",
  "James Orbinski",
  "Sir Michael Rawlins",
  "Jan Rosier",
  "Karin Roth",
  "Amartya Sen",
  "Peter Singer",
  "Judith Whitworth",
  "Heidemarie Wieczorek-Zeul",
  "Richard Wilder",
]

const former_advisors = ["Kenneth J. Arrow"]

const scientific_advisors = [
  "Sonali Kochhar",
  "Mary Moran",
  "Carl F. Nathan",
  "Mark V. Pauly",
  "Dorairaj Prabhakaran",
  "Harvey Rubin",
  "Joshua Salomon",
  "Mel Spigelman",
  "Wu Qunhong",
]

const board = [
  "Aidan Hollis",
  "Thomas Pogge",
  "Tim Gilbert",
  "Sachin Chaturvedi",
]

// must coincide with order of `board`
/*
const boardImages = [
  "Aidan.jpg",
  "Thomas.jpg",
  "",
  "",
]
*/

const management = [
  "Aidan Hollis",
  "Peggy Tse",
  "Maria Ginevra Cattaneo",
  "Max Alexander Matthey",
  "Felicitas Holzer",
  "Daniele Botti",
  "Najid Ahmad",
  "Özlem Denli",
  "Seung Chan (Kevin) Lee",
  "Boris Yakubchik",
]

// must coincide with order of `management`
const managementImages = [
  "Aidan.jpg",
  "Peggy.jpg",
  "Maria.jpg",
  "Max.jpg",
  "Felicitas.jpg",
  "Daniele.jpg",
  "",
  "Ozlem.jpg",
  "",
  "Boris.jpg",
]

const Team = ({ intl }) => (
  <Layout>

    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "team.title" })}
      description={intl.formatMessage({ id: "general.description" })}
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
        return <Advisor key={index} data={{ name: element, id: index + 200 }} />
      })}
    </ul>

    <h1 id="management" style={{ marginTop: "40px" }}>
      <FormattedMessage id="team.management_team" />
    </h1>
    <ul className="team-list team-list-with-photo">
      {management.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 300, image: managementImages[index] }} />
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
