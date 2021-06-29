import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Carousel from "../components/carousel"
import PullQuote from "../components/pullquote"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ intl }) => {

  setTimeout(() => {

    const youtube = document.getElementById("main-video");

    if (youtube) {
      const source = "https://img.youtube.com/vi/"+ youtube.dataset.embed +"/sddefault.jpg";
      const image = new Image();
      image.src = source;

      image.addEventListener( "load", () => {
          youtube.appendChild( image );
      });

      youtube.addEventListener( "click", function() {
        const iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1"+ (intl.locale === "es" ? "&start=2795" : "") );

        this.innerHTML = "";
        this.appendChild( iframe );
      } );
    }

  }, 1000)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "general.title" })}
        description={intl.formatMessage({ id: "general.description" })}
        keywords={[`Health Impact Fund`, `HIF`, `Global Health`]}
      />

      <div style={{ textAlign: `center`, margin: `20px auto` }}>
        <img
          src="/img/0.png"
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
            <FormattedMessage id="intro.benefits_patients_heading" />
          </em>
          <br />
          <FormattedMessage id="intro.benefits_patients_text" />

          <Link to="/benefits">
            <button className="button">
              <FormattedMessage id="intro.button_read_how" />
            </button>
          </Link>

        </div>

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
      </div>

      <div className="panel-container">
        <div className="thin-panel">
          <div className="donation-box">
            <FormattedMessage id="intro.donate_text" />
            <Link to="/donate">
              <button className="button">
                <FormattedMessage id="intro.button_donate" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <PullQuote />

      <div className="panel-container">
        <div className="thin-panel padding-for-button first-panel">
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

        <div className="thin-panel padding-for-button first-panel">
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

        <div className="thin-panel padding-for-button">
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

      <div className="hip-book">
        <img alt="Health Impact Fund pilot" style={{ border: 0, borderRadius: 0 }} src="/img/HIF_pilot.jpg" />
        <div className="book-description-block">
          <em>
            <FormattedMessage id="intro.pilot_heading" />
          </em>
          <FormattedMessage id="intro.pilot_text" />

          <Link to="/publications">
            <div className="button button-first">
              <FormattedMessage id="intro.book_read_papers" />
            </div>
          </Link>

          <a href="/pdf/HIF_pilot_proposal_2021_04.pdf">
            <div className="button button-second">
              <FormattedMessage id="intro.pilot_read_pilot" />
            </div>
          </a>
        </div>
      </div>

      <div id="main-video" className="youtube" data-embed={ intl.locale == "es" ? "6SggD-94bOI" : "yGUgAHTyYMs" }>
        <div className="placeholder-gradient"></div>
        <div className="placeholder-channel"></div>
        <span className="placeholder-title">Health Impact Fund: Making New Medicines available to everyone</span>
        <div className="play-button"></div>
      </div>

      <div className="hip-book">
        <img alt="Health Impact Fund book" src="/img/HIF_book_cover.jpg" />
        <div className="book-description-block">
          <em>
            <FormattedMessage id="intro.book_heading" />
          </em>
          <FormattedMessage id="intro.book_text" />

          <Link to="/publications">
            <div className="button button-first">
              <FormattedMessage id="intro.book_read_papers" />
            </div>
          </Link>

          <a href="/pdf/hif_book.pdf">
            <div className="button button-second">
              <FormattedMessage id="intro.book_read_book" />
            </div>
          </a>
        </div>
      </div>

    </Layout>
  )
}

export default injectIntl(IndexPage)
