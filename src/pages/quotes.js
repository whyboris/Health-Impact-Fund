import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Quotes = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "quotes.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <h1 id="summary">
      <FormattedMessage id="quotes.title" />
    </h1>

    <br/>

      <div className="standalone-quote">
        <a href="https://www.iqwig.de/ueber-uns/struktur-des-instituts/institutsleitung/stellvertretender-institutsleiter/" target="_blank">
          <img className="quote-image" src={'/img/Stefan.jpg'} alt={'Photo of Stefan Lange'} />
        </a>
        <span className="quote-text">
          <FormattedMessage id="intro.quote_iqwig_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_iqwig_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <img className="quote-image" src={'/img/Lauterbach.jpg'} alt={'Photo of Karl Lauterbach'} />
        <span className="quote-text">
          <FormattedMessage id="intro.quote_karl_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_karl_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <img className="quote-image" src={'/img/PeterSinger.jpg'} alt={'Photo of Peter Singer'} />
        <span className="quote-text">
          <FormattedMessage id="intro.quote_peter_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_peter_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <img className="quote-image" src={'/img/Jayasree.jpg'} alt={'Photo of Dr. Jayasree K. Iyer'} />
        <span className="quote-text">
          <FormattedMessage id="intro.quote_jayasree_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_jayasree_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <img className="quote-image" src={'/img/Jami.jpg'} alt={'Photo of Jami Taylor'} />
        <span className="quote-text">
          <FormattedMessage id="intro.quote_jami_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_jami_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <img className="quote-image" src={'/img/LiberalPartyNorway.png'} alt={'Liberal Party of Norway logo'} />
        <span className="quote-text">
          <FormattedMessage id="intro.quote_norway_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_norway_name" />
          </span>
        </span>
      </div>

      <div className="standalone-quote">
        <span className="quote-text">
          <FormattedMessage id="intro.quote_tom_text" />
          <span className="quote-author">
            <FormattedMessage id="intro.quote_tom_name" />
          </span>
        </span>
      </div>

  </Layout>
)

export default injectIntl(Quotes)
