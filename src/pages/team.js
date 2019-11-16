import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Advisor from "../components/advisor"
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

const team = [
  "Aidan Hollis",
  "Peggy Tse",
  "Maria Ginevra Cattaneo",
  "Max Alexander Matthey",
  "Daniele Botti",
  "Boris Yakubchik",
]

const About = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "team.title" })} />

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

    <FormattedMessage id="team.advisory_council">
      {txt => (
        <h1 id="advisory" style={{ marginTop: "40px" }}>
          {txt}
        </h1>
      )}
    </FormattedMessage>

    <ul className="advisory-council">
      {advisors.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index }} />
      })}
    </ul>

    <FormattedMessage id="team.former_advisory_council">
      {txt => (
        <h1 id="advisory" style={{ marginTop: "40px" }}>
          {txt}
        </h1>
      )}
    </FormattedMessage>

    <ul className="advisory-council">
      {former_advisors.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 50 }} />
      })}
    </ul>

    <FormattedMessage id="team.scientific_advisory_board">
      {txt => (
        <h1 id="scientific" style={{ marginTop: "40px" }}>
          {txt}
        </h1>
      )}
    </FormattedMessage>

    <ul className="advisory-council">
      {scientific_advisors.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 100 }} />
      })}
    </ul>

    <FormattedMessage id="team.board">
      {txt => (
        <h1 id="board" style={{ marginTop: "40px" }}>
          {txt}
        </h1>
      )}
    </FormattedMessage>

    <ul className="advisory-council">
      {board.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 200 }} />
      })}
    </ul>

    <FormattedMessage id="team.management_team">
      {txt => (
        <h1 id="management" style={{ marginTop: "40px" }}>
          {txt}
        </h1>
      )}
    </FormattedMessage>

    <ul className="advisory-council">
      {team.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index + 300 }} />
      })}
    </ul>
  </Layout>
)

export default injectIntl(About)
