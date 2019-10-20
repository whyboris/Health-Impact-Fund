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

const About = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "about.title" })} />
    <h1>
      <FormattedMessage id="about.heading" />
    </h1>

    <FormattedMessage
      id="about.about_IGH"
      values={{
        HIP: (
          <>
            <em>Health Impact Fund</em>
          </>
        ),
      }}
    >
      {(...chunks) => <p>{chunks}</p>}
    </FormattedMessage>

    <FormattedMessage
      id="about.about_IGH_more"
      values={{
        email: (
          <>
            <a href="mailto:info@healthimpactfund.org">
              info@healthimpactfund.org
            </a>
          </>
        ),
        donation: (
          <>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
              <FormattedMessage id="about.donation" />
            </a>
          </>
        ),
      }}
    >
      {(...chunks) => <p>{chunks}</p>}
    </FormattedMessage>

    <FormattedMessage id="about.advisory_council">
      {txt => <h1 style={{ marginTop: "40px" }}>{txt}</h1>}
    </FormattedMessage>

    <ul className="advisory-council">
      {advisors.map((element, index) => {
        return <Advisor key={index} data={{ name: element, id: index }} />
      })}
    </ul>
  </Layout>
)

export default injectIntl(About)
