import React from "react"
import {
  // FormattedMessage,
  injectIntl,
} from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Benefits = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "benefits.title" })}
    />
    {/* <h1>
      <FormattedMessage id="benefits.heading" />
    </h1> */}
    {/* <p>
      <FormattedMessage id="benefits.info" />
    </p> */}

    <div className="scroll-to-top" onClick={ () => { window.scrollTo(0, 0); }}>
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
            fill="#222222"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="9.89474" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <h1 id="faq">Frequent questions</h1>

    <p>
      <strong>
        Should the Health Impact Fund replace the existing system of incentives?
      </strong>
      <br />
      Clearly: no. The conventional incentives from patent-protected markups
      remain in place. The Health Impact Fund merely gives pharmaceutical
      innovators the additional option of registering a new medicine and then
      receiving reward payments according to health impact.
    </p>

    <p>
      <strong>How is the Health Impact Fund financed?</strong>
      <br />
      The Health Impact Fund might be financed by states, for example, most
      plausibly in proportion to their gross national incomes. Another possible
      source of funding are international taxes, which might be imposed on
      greenhouse gas emissions or on certain destabilizing financial
      transactions.
    </p>

    <p>
      <strong>How much money does the Health Impact Fund require?</strong>
      <br />A stable and efficient Health Impact Fund would require at least €3
      billion. Of course, it could also work with a larger amount and would then
      attract a larger number of product registrations.
    </p>

    <p>
      <strong>Is this amount realistic?</strong>
      <br />
      €3 billion per year is less than 0.3% of what the world currently spends
      on pharmaceuticals. If all countries participated, then each would need to
      contribute merely 0.0036% of its gross national income to the Health
      Impact Fund. And these contributions would be offset by substantial
      savings through better health and productivity worldwide.
    </p>

    <p>
      <strong>
        What if some affluent countries initially don’t want to contribute?
      </strong>
      <br />
      Their abstention would have some positive effects as well: medicines that
      are registered with the Health Impact Fund could still be sold with large
      patent-protected markups in such non-contributing affluent countries. This
      opportunity would make registration more appealing and would also give
      non-contributing states an incentive to join the Health Impact Fund
      scheme.
    </p>

    <p>
      <strong>
        How does the Health Impact Fund reward participating pharmaceutical
        innovators?
      </strong>
      <br />
      Pharmaceutical innovators can register any new product with the Health
      Impact Fund and then receive annual reward payments that are tied
      exclusively to the measured health gains achieved: the larger a product’s
      contribution to reducing the burden of disease, the higher the reward
      payment. A registered product is rewarded during its first ten years.
    </p>

    <p>
      <strong>And how are health gains measured?</strong>
      <br />
      Health gains are measured in quality-adjusted life years (QALYs) and
      assessed through statistical sampling.
    </p>

    <p>
      <strong>What are quality-adjusted life years?</strong>
      <br />
      The methodology of quality-adjusted life years has been in use for
      approximately 30 years. One qualityadjusted life year might be, for
      instance, one additional year of fully healthy life gained by a patient.
      Or it could be a gain of two life years in poor (50%) health. Or it might
      involve no lengthening of life at all, but rather an improvement in health
      only – as when a medicine averts a four-year-long disease that would have
      reduced the patient’s health from 100% to 75%; this health gain of four
      times 25% also counts as saving one quality-adjusted life year.
    </p>
    <p>
      <strong>
        How do quality-adjusted life years affect the distribution of reward
        payments?
      </strong>
      <br />
      Each year, the Health Impact Fund assesses the quality-adjusted life years
      achieved by each registered drug. Based on these assessments, the fixed
      annual reward pool is then distributed over the registered products. Thus
      if, in a given year, some medicine achieves 10% of the health gains
      produced by all medicines registered with the Health Impact Fund, then
      this medicine is rewarded with 10% of that year’s reward pool.
    </p>
    <p>
      <strong>
        Does the idea of a Health Impact Fund thus far exist only on paper?
      </strong>
      <br />
      No. There has already been a 5-year pilot project about the measurability
      of health gains, which included field work in India and was supported by a
      €2 million grant from the European Research Council. This project has
      shown how the therapeutic effects of medicines can be assessed even in
      poor countries.
    </p>
    <p>
      <strong>How can the Health Impact Fund be realized politically?</strong>
      <br />
      The developers of the Health Impact Fund idea are currently seeking
      support for another pilot project. Its purpose is to try out the central
      elements of the Health Impact Fund on a smaller scale – for example, with
      a single reward pool of €100 million. Pharmaceutical innovators would be
      invited each to propose one new initiative, involving an already-patented
      medicine of theirs, toward achieving additional health gains in some
      impoverished area of the world. An expert committee would select four of
      these proposals and give them three years for implementation. At the end
      of the period, the reward pool would be distributed in proportion to the
      health gains achieved.
    </p>
    <p>
      <strong>
        What initiatives might innovators propose for this new pilot project?
      </strong>
      <br />
      Important selection criteria would be the magnitude and measurability of
      the expected health gains as well as the proposal’s innovation potential
      and inclusion of poor population segments. Pharmaceutical innovators might
      propose, for example, to develop a heat-stable or pediatric version of one
      of their medicines, or the design of a new product-specific therapy or
      diagnosis protocol suitable for the tropics. The objective of the pilot is
      to show that health gains can be reliably and consistently measured. It
      would also show how much additional health impact can be achieved by means
      of such new incentives. It is hoped that, with the help of states,
      foundations and others, such a larger pilot project can soon be
      implemented.
    </p>
    <p>
      <strong>
        Support the new pilot project and feel free to contact the Health Impact
        Fund team at:
      </strong>
      <br />
      Max@healthimpactfund.org
    </p>

  </Layout>
)

export default injectIntl(Benefits)
