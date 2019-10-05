import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

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
        <img
          src="http://temp.yboris.com/hif/0.png"
          alt="Health Impact Fund stylized summary graphic"
          style={{ maxWidth: `100%` }}
        />
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

      <Step
        data={{
          step: "01.",
          img: "http://temp.yboris.com/hif/1.png",
          text: "intro.step_01",
          mirror: false,
          arrow: true,
        }}
      />
      <Step
        data={{
          step: "02.",
          img: "http://temp.yboris.com/hif/2.png",
          text: "intro.step_02",
          mirror: true,
          arrow: true,
        }}
      />
      <Step
        data={{
          step: "03.",
          img: "http://temp.yboris.com/hif/3.png",
          text: "intro.step_03",
          mirror: false,
          arrow: true,
        }}
      />
      <Step
        data={{
          step: "04.",
          img: "http://temp.yboris.com/hif/4.png",
          text: "intro.step_04",
          mirror: true,
          arrow: true,
        }}
      />
      <Step
        data={{
          step: "05.",
          img: "http://temp.yboris.com/hif/5.png",
          text: "intro.step_05",
          mirror: false,
          arrow: false,
        }}
      />

      <div className="video-container">
        <iframe
          title="Medicine for the 99 percent"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/rTMqGbTNkNg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="hip-book">
        <img
          alt="Health Impact Fund book"
          src="https://healthimpactfund.org/wp-content/uploads/2015/12/HIF_Front_Cover-big.jpg"
        />
        <div className="green-block"></div>
        <p>
          <em>
            The Health Impact Fund complements to the existing rules in the
            development and distribution of new medicines.
          </em>
          Read in this book how we proved feasibility and how it would produce
          large gains in global public health and economic productivity at
          comparatively low cost.
        </p>

        <Link to="/knowledge">
          <div className="button button-first">Explore more papers</div>
        </Link>

        <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/hif_book.pdf">
          <div className="button button-second">Read the book</div>
        </a>

      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)
