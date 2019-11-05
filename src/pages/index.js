import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Carousel from "../components/carousel"

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

      <div className="quote-container">
        <svg
          className="quote-svg"
          width="170"
          height="133"
          viewBox="0 0 170 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.71964 132.021V122.139C20.2907 117.133 30.9631 109.293 38.7368 98.6206C46.5105 87.8165 50.3973 76.6171 50.3973 65.0224C50.3973 62.519 50.002 60.6744 49.2115 59.4886C48.8162 58.698 48.2892 58.3028 47.6304 58.3028C46.9716 58.3028 45.9175 58.8298 44.4682 59.8839C40.252 62.9143 34.9817 64.4295 28.6573 64.4295C21.0153 64.4295 14.2957 61.3991 8.49837 55.3382C2.83279 49.1456 0 41.8331 0 33.4006C0 24.441 3.29394 16.6673 9.88182 10.0795C16.4697 3.35982 24.5728 0 34.1911 0C45.127 0 54.6136 4.54564 62.6508 13.6369C70.8197 22.5964 74.9042 34.7181 74.9042 50.002C74.9042 67.7893 69.4363 83.732 58.5004 97.8301C47.5645 111.928 30.3043 123.325 6.71964 132.021ZM101.783 132.021V122.139C115.354 117.133 126.026 109.293 133.8 98.6206C141.574 87.8165 145.46 76.6171 145.46 65.0224C145.46 62.519 145.065 60.6744 144.275 59.4886C143.879 58.698 143.352 58.3028 142.694 58.3028C142.035 58.3028 140.981 58.8298 139.531 59.8839C135.315 62.9143 130.045 64.4295 123.72 64.4295C116.078 64.4295 109.359 61.3991 103.562 55.3382C97.8959 49.1456 95.0632 41.8331 95.0632 33.4006C95.0632 24.441 98.3571 16.6673 104.945 10.0795C111.533 3.35982 119.636 0 129.254 0C140.19 0 149.677 4.54564 157.714 13.6369C165.883 22.5964 169.967 34.7181 169.967 50.002C169.967 67.7893 164.499 83.732 153.564 97.8301C142.628 111.928 125.367 123.325 101.783 132.021Z"
            fill="#D3EDAE"
          />
        </svg>

        <div
          className="pull-quote"
          id="firstQuote"
          onClick={() => {
            document.getElementById("firstQuote").classList.add("quote-hidden")
            document
              .getElementById("secondQuote")
              .classList.remove("quote-hidden")
          }}
        >
          <FormattedMessage id="intro.quote_jami_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_jami_name" />
          </span>
          <div className="quote-indicator">1 / 3</div>
        </div>

        <div
          className="pull-quote quote-hidden"
          id="secondQuote"
          onClick={() => {
            document.getElementById("secondQuote").classList.add("quote-hidden")
            document
              .getElementById("thirdQuote")
              .classList.remove("quote-hidden")
          }}
        >
          <FormattedMessage id="intro.quote_norway_text" />

          <span className="quote-author">
            <FormattedMessage id="intro.quote_norway_name" />
          </span>
          <div className="quote-indicator">2 / 3</div>
        </div>

        <div
          className="pull-quote quote-hidden"
          id="thirdQuote"
          onClick={() => {
            document.getElementById("thirdQuote").classList.add("quote-hidden")
            document
              .getElementById("firstQuote")
              .classList.remove("quote-hidden")
          }}
        >
          <FormattedMessage id="intro.quote_tom_text" />

          <span className="quote-author">
            <FormattedMessage id="intro.quote_tom_name" />
          </span>
          <div className="quote-indicator">3 / 3</div>
        </div>
      </div>

      <div className="panel-container">
        <div className="thin-panel first-panel">
          <em>What.</em>
          <br />
          The Health Impact Fund offers an innovative pay-for-performance
          mechanism that rewards new pharmaceuticals based on actual health
          impact.
          <Link to="/what">
            <button className="button">Read how</button>
          </Link>
        </div>

        <div className="thin-panel first-panel">
          <em>Why.</em>
          <br />
          Most diseases and premature deaths worldwide are caused by poverty –
          poor people can't afford appropriate medicines.
          <Link to="/problem">
            <button className="button">What else?</button>
          </Link>
        </div>

        <div className="thin-panel">
          <em>How.</em>
          <br />
          How does the Health Impact Fund ensure that drug research is
          economically viable?
          <Link to="/how">
            <button className="button">How it works</button>
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
            The Health Impact Fund complements the existing rules in the
            development and distribution of new medicines.
          </em>
          Read in this book how we showed feasibility and how the Health Impact
          Fund would produce large gains in global public health and economic
          productivity at comparatively low cost.
        </p>

        <Link to="/publications">
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
