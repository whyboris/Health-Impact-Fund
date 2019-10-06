import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Advisor from "../components/advisor"
import SEO from "../components/seo"

// make sure each has an entry in the en.json & other languages!
const advisors = [
  "Kenneth J. Arrow",
  "Noam Chomsky",
  "John J. DeGioia",
  "Ruth Faden",
  "Paul Farmer",
  "Robert Gallo",
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


const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "about.title" })} />
    <h1>
      <FormattedMessage id="about.heading" />
    </h1>
    {/* <p>
      <FormattedMessage id="about.info" />
    </p> */}

    {/* <h1>Incentives for Global Health</h1> */}
    <p>
      Incentives for Global Health is a US-based non-profit organization with
      the principal mandate of advancing the
      <em style={{ fontWeight: "bold" }}> Health Impact Fund </em>
      proposal. We welcome new team volunteers to collaborate with us in this
      important work.
    </p>
    <p>
      If you are interested in getting involved or supporting Incentives for
      Global Health, please write us at{" "}
      <a href="mailto:info@healthimpactfund.org">info@healthimpactfund.org</a>{" "}
      or you can make a{" "}
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
        donation
      </a>
      .
    </p>

    <h1 style={{ marginTop: "40px" }}>International Advisory Council</h1>


    <ul className="advisory-council">

      {
        advisors.map((element, index) => {
          return <Advisor data={{ name: element, id: index}} />
        })
      }

    </ul>
  </Layout>
)

export default injectIntl(SecondPage)
