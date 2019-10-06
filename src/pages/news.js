import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "news.title" })} />
    <h1>
      <FormattedMessage id="news.heading" />
    </h1>
    {/* <p>
      <FormattedMessage id="news.info" />
    </p> */}

    <div className="news-item">
      <span className="date">2019.09.25</span>

      <div className="news-text">
        <h2>
          <FormattedMessage id="news.2019.09.25_title" />
        </h2>

        <p>
          <FormattedMessage id="news.2019.09.25_body" />
        </p>

        <a
          className="news-download"
          href="http://temp.yboris.com/hif/LabourUK_Medicines-For-The-Many.pdf"
        >
          <Icon />
          <span>
            MEDICINES FOR THE MANY:
            <br />
            Public Health before Private Profit
          </span>
        </a>
      </div>
    </div>

    <div className="news-item">
      <div className="photo-and-caption">
        <img
          src="http://temp.yboris.com/hif/GordonBrown.jpg"
          alt="Gordon Brown"
        />
        <span className="caption">
          <a href="https://www.flickr.com/photos/26087974@N05/2794502401/in/photolist-5fWycT-73eyY4-K27DF5-7srBjU-5yrHsu-4pRJQ3-LxKie-6FQgRL-21YNA-7fuBBP-YrMnc-XLitE-4pB7az-22E6bwo-81ukoA-6qCvdA-5A2dWq-81raKp-3pqzmL-4W6Ldz-9e3DLE-7G3t1c-7KVkH-81uk3j-bnoTq-83tNQB-7KVx4-4WaZnb-65D1NB-YrMMT-4W6LHi-6byQ6F-E1Bbz-suznZz-7YLEhZ-7KUVL-7KV4s-4Wb2z9-4Wb5nG-5WEWkq-7GEke-bB7KBf-7KUXP-6Fcrgy-4Wb1ey-7JrU1-7KUFS-5AUF6y-6vuMmB-7KVda">
            Photo by Cory M. Grenier
          </a>
        </span>
      </div>

      <span className="date">2019.06.20</span>

      <div className="news-text">
        <h2>
          <FormattedMessage id="news.2019.06.20_title" />
        </h2>

        <p>
          <FormattedMessage id="news.2019.06.20_body" />
        </p>
      </div>
    </div>
  </Layout>
)

export default injectIntl(SecondPage)
