import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Step from "../components/step"

import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import step4 from '../images/4.png'
import step5 from '../images/5.png'

// import arrow from '../images/arrow.png'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`Health Impact Fund`, `HIF`, `Global Health`]}
      />

      <div style={{ maxWidth: `600px`, margin: `20px auto` }}>
        <Image />
      </div>

      <div className="intro-and-tagline">
        <h1>
          <FormattedMessage id="intro_hif" />
        </h1>
        <h2>
          <FormattedMessage id="intro_hif_tagline" />
        </h2>
      </div>

      <p className="center-block">
        <FormattedMessage id="intro_hif_description" />
      </p>

      <Step data={{step: '01.', img: step1, text: "intro_01", mirror: false, arrow: true}} />
      <Step data={{step: '02.', img: step2, text: "intro_02", mirror: true,  arrow: true}} />
      <Step data={{step: '03.', img: step3, text: "intro_03", mirror: false, arrow: true}} />
      <Step data={{step: '04.', img: step4, text: "intro_04", mirror: true,  arrow: true}} />
      <Step data={{step: '05.', img: step5, text: "intro_05", mirror: false, arrow: false}} />

      <Link to="/page-2/">
        <FormattedMessage id="go_page2" />
      </Link>

    </Layout>
  )
}

export default injectIntl(IndexPage)
