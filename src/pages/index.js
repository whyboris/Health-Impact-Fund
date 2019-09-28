import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Step from "../components/step"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`Health Impact Fund`, `HIF`, `Global Health`]}
      />

      <div style={{ textAlign: `center`, margin: `20px auto` }}>
        <img src="http://temp.yboris.com/hif/0.png" style={{ maxWidth: `100%` }} />
      </div>

      <div className="intro-and-tagline">
        <h1>
          <FormattedMessage id="intro.hif" />
        </h1>
        <h2>
          <FormattedMessage id="intro.hif_tagline" />
        </h2>
      </div>

      <p className="center-block">
        <FormattedMessage id="intro.hif_description" />
      </p>

      <Step data={{step: '01.', img: 'http://temp.yboris.com/hif/1.png', text: "intro.step_01", mirror: false, arrow: true}} />
      <Step data={{step: '02.', img: 'http://temp.yboris.com/hif/2.png', text: "intro.step_02", mirror: true,  arrow: true}} />
      <Step data={{step: '03.', img: 'http://temp.yboris.com/hif/3.png', text: "intro.step_03", mirror: false, arrow: true}} />
      <Step data={{step: '04.', img: 'http://temp.yboris.com/hif/4.png', text: "intro.step_04", mirror: true,  arrow: true}} />
      <Step data={{step: '05.', img: 'http://temp.yboris.com/hif/5.png', text: "intro.step_05", mirror: false, arrow: false}} />

    </Layout>
  )
}

export default injectIntl(IndexPage)
