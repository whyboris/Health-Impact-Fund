import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Advisor from "../components/advisor"
import SEO from "../components/seo"

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
      <Advisor
        data={{
          name: "Kenneth J. Arrow",
          description: "about.Kenneth_Arrow",
          description_long: "about.Kenneth_Arrow_long",
          id: '01'
        }}
      />
      <Advisor
        data={{
          name: "Noam Chomsky",
          description: "about.Noam_Chomsky",
          description_long: "about.Noam_Chomsky_long",
          id: '02'
        }}
      />
      <Advisor
        data={{
          name: "John J. DeGioia",
          description: "about.John_DeGioia",
          description_long: "about.John_DeGioia_long",
          id: '03'
        }}
      />
      <Advisor
        data={{
          name: "Ruth Faden",
          description: "about.Ruth_Faden",
          description_long: "about.Ruth_Faden_long",
          id: '04'
        }}
      />
      <Advisor
        data={{
          name: "Paul Farmer",
          description: "about.Paul_Farmer",
          description_long: "about.Paul_Farmer_long",
          id: '05'
        }}
      />
      <Advisor
        data={{
          name: "Robert Gallo",
          description: "about.Robert_Gallo",
          description_long: "about.Robert_Gallo_long",
          id: '06'
        }}
      />
      <Advisor
        data={{
          name: "Professor David Haslam",
          description: "about.David_Haslam",
          description_long: "about.David_Haslam_long",
          id: '07'
        }}
      />
      <Advisor
        data={{
          name: "Paul Martin",
          description: "about.Paul_Martin",
          description_long: "about.Paul_Martin_long",
          id: '08'
        }}
      />
      <Advisor
        data={{
          name: "Christopher Murray",
          description: "about.Christopher_Murray",
          description_long: "about.Christopher_Murray_long",
          id: '09'
        }}
      />
      <Advisor
        data={{
          name: "Gustav Nossal",
          description: "about.Gustav_Nossal",
          description_long: "about.Gustav_Nossal_long",
          id: '010'
        }}
      />
      <Advisor
        data={{
          name: "Baroness Onora O’Neill",
          description: "about.Onora_O_Neill",
          description_long: "about.Onora_O_Neill_long",
          id: '011'
        }}
      />
      <Advisor
        data={{
          name: "James Orbinski",
          description: "about.James_Orbinski",
          description_long: "about.James_Orbinski_long",
          id: '012'
        }}
      />
      <Advisor
        data={{
          name: "Sir Michael Rawlins",
          description: "about.Michael_Rawlins",
          description_long: "about.Michael_Rawlins_long",
          id: '013'
        }}
      />
      <Advisor
        data={{
          name: "Jan Rosier",
          description: "about.Jan_Rosier",
          description_long: "about.Jan_Rosier_long",
          id: '014'
        }}
      />
      <Advisor
        data={{
          name: "Karin Roth",
          description: "about.Karin_Roth",
          description_long: "about.Karin_Roth_long",
          id: '015'
        }}
      />
      <Advisor
        data={{
          name: "Amartya Sen",
          description: "about.Amartya_Sen",
          description_long: "about.Amartya_Sen_long",
          id: '016'
        }}
      />
      <Advisor
        data={{
          name: "Peter Singer",
          description: "about.Peter_Singer",
          description_long: "about.Peter_Singer_long",
          id: '017'
        }}
      />
      <Advisor
        data={{
          name: "Judith Whitworth",
          description: "about.Judith_Whitworth",
          description_long: "about.Judith_Whitworth_long",
          id: '018'
        }}
      />
      <Advisor
        data={{
          name: "Heidemarie Wieczorek-Zeul",
          description: "about.Heidemarie_Wieczorek_Zeul",
          description_long: "about.Heidemarie_Wieczorek_Zeul_long",
          id: '019'
        }}
      />
      <Advisor
        data={{
          name: "Richard Wilder",
          description: "about.Richard_Wilder",
          description_long: "about.Richard_Wilder_long",
          id: '020'
        }}
      />
    </ul>
  </Layout>
)

export default injectIntl(SecondPage)
