import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "knowledge.title" })}
    />
    <h1>
      <FormattedMessage id="knowledge.heading" />
    </h1>
    <p>
      <FormattedMessage id="knowledge.info" />
    </p>

    <h2>Publications</h2>
    <div class="publication_container">
      <img
        src="https://healthimpactfund.org/wp-content/uploads/2015/12/HIF_Front_Cover-big.jpg"
        alt="Health Impact Fund Book"
      />

      <h3>The Health Impact Fund Book</h3>
      <p>
        This book presents for public consideration a complement to the existing
        rules governing the development and distribution of new medicines. It
        shows that the proposed Health Impact Fund is feasible and that it would
        produce large gains in global public health and economic productivity at
        comparatively low cost.
      </p>
      <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/hif_book.pdf">
        Click here to download
      </a>
    </div>

    <div class="publication_container">
      <img
        src="https://healthimpactfund.org/wp-content/uploads/2015/12/Summaries.png"
        alt="Health Impact Fund Summaries"
      />

      <h3>The Health Impact Fund Summaries</h3>
      <p>
        This document provides a two page summary of the Health Impact Fund and
        its goals. The document covers items including: How the Health Impact
        Fund works for patients, How the Health Impact Fund works for
        Pharmaceutical Companies, How the Health Impact Fund works for Taxpayers
        and The path forward.
      </p>
      <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/HIFshort.pdf">
        Click here to download
      </a>
      <br />
    </div>

    <div class="publication_container">
      <ul>
        <li>
          <strong>Aidan Hollis:</strong>
          <span>“The Health Impact Fund and Price Determination”</span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP1_Hollis.pdf">Download Link</a>
        </li>

        <li>
          <strong>Talha Syed:</strong>
          <span>
            “Should a Prize System for Pharmaceuticals Require Patent Protection
          </span>
          <span>
            <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP2_Syed.pdf">Download Link</a>
          </span>
        </li>

        <li>
          <strong>Thomas J. Bollyky:</strong>
          <span>
            “The Relationship of the Health Impact Fund and Its Registrants”
          </span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP3_Bollyky.pdf">
            Download Link
          </a>
        </li>

        <li>
          <strong>Kalipso Chalkidou:</strong>
          <span>
            “Assessing the Added Value of Health Technologies: NICE’s Experience
          </span>

          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP4_Chalkidou.pdf">
            Download Link
          </a>
        </li>
        <li>
          <strong>Juggs Ravalia and Lennart Stern:</strong>
          <span>
            “The MHIF System: Supporting the Health Impact Fund with Mobile
          </span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP5_Ravallia_and_Stern.pdf">
            Download Link
          </a>
        </li>

        <li>
          <strong>Rudolf V. Van Puymbroeck:</strong>
          <span>“The Health Impact Fund: Creation and Commitment.”</span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP6_Van_Puymbroeck.pdf">
            Download Link
          </a>
        </li>
        <li>
          <strong>Peter Singer and Doris Schroeder, lead authors:</strong>
          <span>
            “Ethical Reasons for Intellectual Property Rights Reform: A Report
          </span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP7_Singer_and_Schroeder.pdf">
            Download Link
          </a>
        </li>
        <li>
          <strong>Joy Mendel and Aidan Hollis:</strong>
          <span>“The Health Impact Fund and Traditional Medicines.”</span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP8_Mendel_and_Hollis.pdf">
            Download Link
          </a>
        </li>
        <li>
          <strong>Aidan Hollis and Thomas Pogge:</strong>
          <span>
            “Product- Development Partnerships and the Health Impact Fund.”
          </span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP9_Hollis-Pogge_PDPs.pdf">
            Download Link
          </a>
        </li>

        <li>
          <strong>Aidan Hollis and Thomas Pogge:</strong>
          <span>
            “ONU: groupe de haut niveau sur l&#8217;accès aux traitements
            médicaux
          </span>

          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-draft-2016-02-23-en-français.pdf">
            Download Link
          </a>
        </li>
        <li>
          <strong>Ishaan Nerurkar &#038; Colton Jang:</strong>
          <span>“The Health Impact Fund: A Mechanism Design Approach.”</span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/HIF_Mechanism_Discussion_Paper.pdf">
            Download Link
          </a>
        </li>

        <li>
          <strong>Thomas Pogge &#038; Aidan Hollis:</strong>
          <span>
            “Secretary-General&#8217;s High-Level Panel on Access to Medicines
          </span>

          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-draft-016-02-22-formatted.docx.pdf">
            Download Link
          </a>
        </li>

        <li>
          <strong>Thomas Pogge &#038; Aidan Hollis:</strong>
          <span>
            “Response to the High-Level Panel and Expert Advisory Group&#8221;
          </span>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-response-2016-03-16.docx.pdf">
            Download Link
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default injectIntl(SecondPage)
