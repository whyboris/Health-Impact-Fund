import React from "react"
import {
  // FormattedMessage,
  injectIntl,
} from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "how.title" })} />

    <div
      className="scroll-to-top"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
          fill="#222222"
        />
      </svg>
    </div>

    <h1 id="summary">The Health Impact Fund in a few sentences.</h1>

    <p>
      The Health Impact Fund provides a complementary system for the development
      of pharmaceutical innovations – especially ones intended for poor patients
      who cannot afford expensive medicines.
    </p>
    <p>
      <strong>How does it work?</strong>
      <br />
      The Health Impact Fund is financed by states and charitable contributors.
      It would give pharmaceutical innovators the option of registering any new
      product for annual reward payments.
    </p>
    <p>
      <strong>Control of prices to support access:</strong>
      <br />
      The price of registered products is limited to the costs of manufacture
      and distribution, and therefore affordable even for poor patients. The
      price of registered medicines is delinked from their R&D cost.
    </p>

    <p>
      <strong>Competitive reward payments based on performance:</strong>
      <br />
      Reward payments for pharmaceutical innovators depend solely on the annual
      health gains achieved by their registered medicines. The more such a new
      medicine improves or lengthens human lives, the more money the innovator
      earns.
    </p>

    <h1 id="background">Background</h1>

    <p>
      <strong>
        Pharmaceutical research is currently funded from patent-protected
        markups.
      </strong>
      <br />
      The development of new medicines is very expensive. To cover these R&D
      costs, countries offer 20-year patents. Under the protection of these
      temporary monopolies, pharmaceutical firms can sell their new products at
      very high prices. This system has two adverse effects:
    </p>
    <p>
      <strong>Little research into diseases of poor people:</strong>
      <br />
      In the current system, the diseases of the poor are unattractive for
      pharmaceutical research. This is so because poor patients cannot afford to
      buy expensive medicines. The diseases of the poor are therefore generally
      neglected by pharmaceutical companies. Remedies against hair loss are more
      likely to be sought than remedies against deadly diseases of poverty, such
      as dengue, leishmaniasis or Ebola.
    </p>
    <p>
      <strong>High prices limit access to new drugs:</strong>
      <br />
      New medicines are generally unaffordable for the poor. Even when new
      medicines are developed, for example against the hepatitis C virus, they
      are almost always sold at profit-maximizing monopoly prices. These far
      exceed what most patients can afford. The same also holds for medicines
      against global diseases such as cancer.
    </p>
    <p>
      <strong>
        The Health Impact Fund provides a complementary system that strengthens
        world health.
      </strong>
      <br />
      With the Health Impact Fund, pharmaceutical companies obtain an additional
      option that, through new incentives, mitigates these two adverse effects.
    </p>

    <h1 id="essence">The Essence</h1>
    <p>
      <strong>Health gains as the standard.</strong>
      <br />
      The purpose of medicines is to improve and preserve health. The Health
      Impact Fund aligns corporate incentives to engage in research, development
      and marketing with precisely this social objective. This is so because the
      reward payments that any innovator receives for its registered innovation
      are tied directly to the health gains that this medicine achieves year by
      year. The more a registered product lengthens or improves human lives, the
      higher are the reward payments that its innovator receives from the Health
      Impact Fund. In this calculus, the health of all human beings is weighted
      equally, regardless of whether they are rich or poor.
    </p>
    <p>
      <strong>Covering the costs of pharmaceutical firms.</strong>
      <br />
      With the publicly funded reward payments that the Health Impact Fund pays
      out for each registered medicine, the firm bears the risks of failure in
      case its product has little health benefit and earns the rewards of
      success, in case its product is therapeutically very successful. On
      average, firms should be able to cover their costs and earn a competitive
      rate of return.
    </p>
    <p>
      <strong>Delinking a medicine’s price from its R&D costs.</strong>
      <br />
      Registered medicines must be sold at an affordable price, which covers
      merely the costs of manufacture and distribution. Such medicines are
      therefore affordable even to very poor patients.
    </p>
  </Layout>
)

export default injectIntl(Benefits)
