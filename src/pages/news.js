import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "news.title" })} />
    <h1>
      <FormattedMessage id="news.heading" />
    </h1>
    <p>
      <FormattedMessage id="news.info" />
    </p>

    <div class="news-item">
      <div class="photo-and-caption">
        <img src="http://temp.yboris.com/hif/GordonBrown.jpg" />
        <span class="caption">
          <a href="https://www.flickr.com/photos/26087974@N05/2794502401/in/photolist-5fWycT-73eyY4-K27DF5-7srBjU-5yrHsu-4pRJQ3-LxKie-6FQgRL-21YNA-7fuBBP-YrMnc-XLitE-4pB7az-22E6bwo-81ukoA-6qCvdA-5A2dWq-81raKp-3pqzmL-4W6Ldz-9e3DLE-7G3t1c-7KVkH-81uk3j-bnoTq-83tNQB-7KVx4-4WaZnb-65D1NB-YrMMT-4W6LHi-6byQ6F-E1Bbz-suznZz-7YLEhZ-7KUVL-7KV4s-4Wb2z9-4Wb5nG-5WEWkq-7GEke-bB7KBf-7KUXP-6Fcrgy-4Wb1ey-7JrU1-7KUFS-5AUF6y-6vuMmB-7KVda">
            Photo by Cory M. Grenier
          </a>
        </span>
      </div>

      <span class="date">2019.06.20</span>

      <div class="news-text">
        <h2>
          London meeting on the Health Impact Fund with the Rt Hon Gordon Brown.
        </h2>

        <p>
          On June 20 2019, a wide variety of stakeholders participated in a
          meeting on the <em>Health Impact Fund</em> proposal, the MVAC
          proposal, and antibiotic market entry rewards. These alternative and
          complementary mechanisms to support innovation showed the importance
          of new financing tools for pharmaceutical innovation in a variety of
          areas. The Rt Hon Gordon Brown offered incisive comments on the
          challenges of attracting political support in the current environment.
        </p>
      </div>
    </div>
  </Layout>
)

export default injectIntl(SecondPage)
