import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "knowledge.title" })}
    />
    <h1>
      <FormattedMessage id="knowledge.heading" />
    </h1>
    {/* <p>
      <FormattedMessage id="knowledge.info" />
    </p> */}

    <div className="publication_container individual_publication">
      <img
        src="http://temp.yboris.com/hif/HIF_pilot_proposal_2019_04.png"
        alt="Health Impact Fund Pilot Proposal"
      />

      <h3>Health Impact Fund Pilot Proposal</h3>
      <p>
        The Health Impact Fund Pilot Proposal summarizes the Health Impact Fund
        initative, its design and terms; answers the question "why?", and lists
        its members.
      </p>
      <a href="http://temp.yboris.com/hif/HIF_pilot_proposal_2019_04.pdf">
        <Icon />
        <span>Click here to download</span>
      </a>
    </div>

    <div className="publication_container individual_publication">
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
        <Icon />
        <span>Click here to download</span>
      </a>
    </div>

    <div className="publication_container individual_publication">
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
        <Icon />
        <span>Click here to download</span>
      </a>
      <br />
    </div>

    <div className="publication_container">
      <ul>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP1_Hollis.pdf">
            <Icon />
            <strong>Aidan Hollis</strong>
            <span>The Health Impact Fund and Price Determination</span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP2_Syed.pdf">
            <Icon />
            <strong>Talha Syed</strong>
            <span>
              Should a Prize System for Pharmaceuticals Require Patent
              Protection
            </span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP3_Bollyky.pdf">
            <Icon />
            <strong>Thomas J. Bollyky</strong>
            <span>
              The Relationship of the Health Impact Fund and Its Registrants
            </span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP4_Chalkidou.pdf">
            <Icon />
            <strong>Kalipso Chalkidou</strong>
            <span>
              Assessing the Added Value of Health Technologies: NICE’s
              Experience
            </span>
          </a>
        </li>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP5_Ravallia_and_Stern.pdf">
            <Icon />
            <strong>Juggs Ravalia and Lennart Stern</strong>
            <span>
              The MHIF System: Supporting the Health Impact Fund with Mobile
            </span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP6_Van_Puymbroeck.pdf">
            <Icon />
            <strong>Rudolf V. Van Puymbroeck</strong>
            <span>The Health Impact Fund: Creation and Commitment.</span>
          </a>
        </li>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP7_Singer_and_Schroeder.pdf">
            <Icon />
            <strong>Peter Singer and Doris Schroeder, lead authors</strong>
            <span>
              Ethical Reasons for Intellectual Property Rights Reform: A Report
            </span>
          </a>
        </li>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP8_Mendel_and_Hollis.pdf">
            <Icon />
            <strong>Joy Mendel and Aidan Hollis</strong>
            <span>The Health Impact Fund and Traditional Medicines.</span>
          </a>
        </li>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/DP9_Hollis-Pogge_PDPs.pdf">
            <Icon />
            <strong>Aidan Hollis and Thomas Pogge</strong>
            <span>
              Product-Development Partnerships and the Health Impact Fund.
            </span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-draft-2016-02-23-en-français.pdf">
            <Icon />
            <strong>Aidan Hollis and Thomas Pogge</strong>
            <span>
              ONU: groupe de haut niveau sur l'accès aux traitements médicaux
            </span>
          </a>
        </li>
        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/HIF_Mechanism_Discussion_Paper.pdf">
            <Icon />
            <strong>Ishaan Nerurkar & Colton Jang</strong>
            <span>The Health Impact Fund: A Mechanism Design Approach.</span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-draft-016-02-22-formatted.docx.pdf">
            <Icon />
            <strong>Thomas Pogge & Aidan Hollis</strong>
            <span>
              Secretary-General's High-Level Panel on Access to Medicines
            </span>
          </a>
        </li>

        <li>
          <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/High-level-panel-response-2016-03-16.docx.pdf">
            <Icon />
            <strong>Thomas Pogge & Aidan Hollis</strong>
            <span>
              Response to the High-Level Panel and Expert Advisory Group
            </span>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default injectIntl(SecondPage)
