import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const Publications = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "publications.title" })}
    />
    <h1>
      <FormattedMessage id="publications.heading" />
    </h1>

    <div className="publication-container individual_publication">
      <img
        src="/img/HIF_pilot.jpg"
        alt="Health Impact Fund Pilot Proposal"
      />

      <FormattedMessage id="publications.hif_pilot_proposal">
        {txt => <h3>{txt}</h3>}
      </FormattedMessage>
      <FormattedMessage id="publications.hif_pilot_proposal_description">
        {txt => <p>{txt}</p>}
      </FormattedMessage>
      <a href="/pdf/HIF_pilot_proposal_2019_11.pdf">
        <Icon />
        <FormattedMessage id="publications.click_to_download" />
      </a>
    </div>

    <div className="publication-container individual_publication">
      <img
        src="/img/summaries.jpg"
        alt="Health Impact Fund Summaries"
      />

      <FormattedMessage id="publications.hif_summaries">
        {txt => <h3>{txt}</h3>}
      </FormattedMessage>
      <FormattedMessage id="publications.hif_summaries_description">
        {txt => <p>{txt}</p>}
      </FormattedMessage>
      <a href="/pdf/HIFshort.pdf">
        <Icon />
        <FormattedMessage id="publications.click_to_download" />
      </a>
      <br />
    </div>

    <div id="publications" className="publication-container">
      <ul>
        <li>
          <a href="/pdf/DP1_Hollis.pdf">
            <Icon />
            <strong>Aidan Hollis</strong>
            <span>The Health Impact Fund and Price Determination</span>
          </a>
        </li>

        <li>
          <a href="/pdf/DP2_Syed.pdf">
            <Icon />
            <strong>Talha Syed</strong>
            <span>
              Should a Prize System for Pharmaceuticals Require Patent
              Protection
            </span>
          </a>
        </li>

        <li>
          <a href="/pdf/DP3_Bollyky.pdf">
            <Icon />
            <strong>Thomas J. Bollyky</strong>
            <span>
              The Relationship of the Health Impact Fund and Its Registrants
            </span>
          </a>
        </li>

        <li>
          <a href="/pdf/DP4_Chalkidou.pdf">
            <Icon />
            <strong>Kalipso Chalkidou</strong>
            <span>
              Assessing the Added Value of Health Technologies: NICE’s
              Experience
            </span>
          </a>
        </li>
        <li>
          <a href="/pdf/DP5_Ravallia_and_Stern.pdf">
            <Icon />
            <strong>Juggs Ravalia and Lennart Stern</strong>
            <span>
              The MHIF System: Supporting the Health Impact Fund with Mobile
            </span>
          </a>
        </li>

        <li>
          <a href="/pdf/DP6_Van_Puymbroeck.pdf">
            <Icon />
            <strong>Rudolf V. Van Puymbroeck</strong>
            <span>The Health Impact Fund: Creation and Commitment.</span>
          </a>
        </li>
        <li>
          <a href="/pdf/DP7_Singer_and_Schroeder.pdf">
            <Icon />
            <strong>Peter Singer and Doris Schroeder, lead authors</strong>
            <span>
              Ethical Reasons for Intellectual Property Rights Reform: A Report
            </span>
          </a>
        </li>
        <li>
          <a href="/pdf/DP8_Mendel_and_Hollis.pdf">
            <Icon />
            <strong>Joy Mendel and Aidan Hollis</strong>
            <span>The Health Impact Fund and Traditional Medicines.</span>
          </a>
        </li>
        <li>
          <a href="/pdf/DP9_Hollis-Pogge_PDPs.pdf">
            <Icon />
            <strong>Aidan Hollis and Thomas Pogge</strong>
            <span>
              Product-Development Partnerships and the Health Impact Fund.
            </span>
          </a>
        </li>

        <li>
          <a href="/pdf/High-level-panel-draft-2016-02-23-en-français.pdf">
            <Icon />
            <strong>Aidan Hollis and Thomas Pogge</strong>
            <span>
              ONU: groupe de haut niveau sur l'accès aux traitements médicaux
            </span>
          </a>
        </li>
        <li>
          <a href="/pdf/HIF_Mechanism_Discussion_Paper.pdf">
            <Icon />
            <strong>Ishaan Nerurkar & Colton Jang</strong>
            <span>The Health Impact Fund: A Mechanism Design Approach.</span>
          </a>
        </li>

        <li>
          <a href="/pdf/High-level-panel-draft-016-02-22-formatted.docx.pdf">
            <Icon />
            <strong>Thomas Pogge & Aidan Hollis</strong>
            <span>
              Secretary-General's High-Level Panel on Access to Medicines
            </span>
          </a>
        </li>

        <li>
          <a href="/pdf/High-level-panel-response-2016-03-16.docx.pdf">
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

export default injectIntl(Publications)
