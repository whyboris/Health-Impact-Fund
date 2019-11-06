import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Carousel from "../components/carousel"
import PullQuote from "../components/pullquote"

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

      <Carousel />

      <br />
      <br />

      <div className="panel-container">
        <div className="thin-panel first-panel">
          <em>
            <FormattedMessage id="intro.benefits_innovators_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.benefits_innovators_text" />
          <Link to="/benefits">
            <button className="button">
              <FormattedMessage id="intro.button_read_how" />
            </button>
          </Link>
        </div>

        <div className="thin-panel">
          <em>
            <FormattedMessage id="intro.benefits_government_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.benefits_government_text" />
          <Link to="/benefits">
            <button className="button">
              <FormattedMessage id="intro.button_read_how" />
            </button>
          </Link>
        </div>

        <div className="thin-panel last-panel">
          <em>
            <FormattedMessage id="intro.benefits_patients_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.benefits_patients_text" />
          <div className="donation-box">
            <FormattedMessage id="intro.donate_text" />
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
              <button className="button">
                <FormattedMessage id="intro.button_donate" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <PullQuote />

      <div className="panel-container">
        <div className="thin-panel first-panel">
          <em>
            <FormattedMessage id="intro.what_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.what_text" />
          <Link to="/what">
            <button className="button">
              <FormattedMessage id="intro.what_button" />
            </button>
          </Link>
        </div>

        <div className="thin-panel first-panel">
          <em>
            <FormattedMessage id="intro.why_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.why_text" />
          <Link to="/problem">
            <button className="button">
              <FormattedMessage id="intro.why_button" />
            </button>
          </Link>
        </div>

        <div className="thin-panel">
          <em>
            <FormattedMessage id="intro.how_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.how_text" />
          <Link to="/how">
            <button className="button">
              <FormattedMessage id="intro.how_button" />
            </button>
          </Link>
        </div>
      </div>

      <div className="video-container">
        <iframe
          title="Medicine for the 99 percent"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/rTMqGbTNkNg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
            <FormattedMessage id="intro.book_heading" />
          </em>
          <FormattedMessage id="intro.book_text" />
        </p>

        <Link to="/publications">
          <div className="button button-first">
            <FormattedMessage id="intro.book_read_papers" />
          </div>
        </Link>

        <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/hif_book.pdf">
          <div className="button button-second">
            <FormattedMessage id="intro.book_read_book" />
          </div>
        </a>
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)
