import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const Book = ({ intl }) => (
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
            src='/img/HIF_book_cover.jpg'
            alt="Health Impact Fund Book"
            />
        </div>
      </div>

    </div>

    <div className="publication-container individual_publication book-page-hack">
      <FormattedMessage id="book.hif_book">
        {txt => <h1>{txt}</h1>}
      </FormattedMessage>

      <FormattedMessage id="book.hif_book_description">
        {txt => <p>{txt}</p>}
      </FormattedMessage>

      <FormattedMessage id="book.hif_book_note">
        {txt => <p>{txt}</p>}
      </FormattedMessage>

      <a href="/pdf/hif_book.pdf">
        <Icon />
        <FormattedMessage id="book.click_to_download" />
      </a>
    </div>

  </Layout>
)

export default injectIntl(Book)
