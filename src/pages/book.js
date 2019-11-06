import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const Knowledge = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "book.title" })}
    />

    <div className="book-container-3d">

      <div className="csstransforms3d">
        <div className="book">
          <img
            className="book-cover"
            src="http://temp.yboris.com/hif/HIF_book_cover.jpg"
            alt="Health Impact Fund Book"
            />
        </div>
      </div>

    </div>

    <div className="publication-container individual_publication book-page-hack">
      <FormattedMessage id="knowledge.hif_book">
        {txt => <h1>{txt}</h1>}
      </FormattedMessage>

      <FormattedMessage id="knowledge.hif_book_description">
        {txt => <p>{txt}</p>}
      </FormattedMessage>

      <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/hif_book.pdf">
        <Icon />
        <FormattedMessage id="knowledge.click_to_download" />
      </a>
    </div>

  </Layout>
)

export default injectIntl(Knowledge)
