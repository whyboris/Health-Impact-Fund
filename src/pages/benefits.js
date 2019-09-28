import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "benefits.title" })}
    />
    <h1>
      <FormattedMessage id="benefits.heading" />
    </h1>
    <p>
      <FormattedMessage id="benefits.info" />
    </p>

    <br />
    <br />
    <br />

    <h1>The Health Impact Fund in a few sentences.</h1>

    <p>
      The Health Impact Fund provides a complementary system for the development
      of pharmaceutical innovations – especially ones intended for poor patients
      who cannot afford expensive medicines.
    </p>
    <p>
      <strong>How does it work?</strong>
      The Health Impact Fund is financed by states and charitable contributors.
      It would give pharmaceutical innovators the option of registering any new
      product for annual reward payments.
    </p>
    <p>
      <strong>One special feature:</strong>
      the price of registered products is limited to the costs of manufacture
      and distribution, and therefore affordable even for poor patients. The
      price of registered medicines is delinked from their R&D cost.
    </p>

    <p>
      <strong>A second special feature:</strong>
      reward payments for pharmaceutical innovators depend solely on the annual
      health gains achieved by their registered medicines. The more such a new
      medicine improves or lengthens human lives, the more money goes to its
      innovator.
    </p>

    <h1>Background</h1>

    <p>
      <strong>
        Pharmaceutical research is currently funded from patent-protected
        markups.
      </strong>
      The development of new medicines is very expensive. To cover these R&D
      costs, states provide 20-year patents. Under the protection of such
      temporary monopolies, pharmaceutical firms sell their new products at very
      high prices. This system has two adverse effects:
    </p>
    <p>
      <strong>First adverse effect:</strong>
      in the current system, the diseases of the poor are unattractive areas for
      pharmaceutical research. This is so because poor patients cannot afford to
      buy expensive medicines. The diseases of the poor are therefore generally
      neglected by pharmaceutical research. Remedies against hair loss are more
      likely to be sought than remedies against deadly diseases of poverty, such
      as dengue, leishmaniasis or Ebola.
    </p>
    <p>
      <strong>Second adverse effect:</strong>
      new medicines are generally unaffordable for the poor. Even when new
      medicines are developed, against hepatitis C for example, they are almost
      always sold at profit-maximizing monopoly prices. These far exceed what
      most patients can afford. The same also holds for medicines against global
      diseases such as cancer.
    </p>
    <p>
      <strong>
        The Health Impact Fund provides a complementary system that strengthens
        world health.
      </strong>
      With the Health Impact Fund, pharmaceutical companies obtain an additional
      option that, through new incentives, mitigates the two adverse effects.
    </p>

    <h1>The Essence.</h1>
    <p>
      <strong>Health gains as the standard.</strong>
      The purpose of medicines is to improve and preserve health. The Health
      Impact Fund aligns research, development and marketing with precisely this
      purpose. This is so because the reward payments that any innovator
      receives for its registered innovation result exclusively from the health
      gains that this medicine achieves year by year. The more a registered
      product lengthens or improves human lives, the higher are the reward
      payments that its innovator receives from the Health Impact Fund. In this
      calculus, the health of all human beings is weighted equally, regardless
      of whether they are rich or poor.
    </p>
    <p>
      <strong>Covering the costs of pharmaceutical firms.</strong>
      With the publicly funded reward payments that the Health Impact Fund pays
      out for each registered medicine, the firm can recoup its R&D costs and
      earn profits in addition.
    </p>
    <p>
      <strong>Delinking a medicine’s price from its R&D costs.</strong>
      Registered medicines can then be sold at the affordable cost price, which
      covers merely the variable costs of manufacture and distribution. Such
      medicines are therefore affordable even to very poor patients.
    </p>

    <h1>Frequent questions.</h1>

    <p>
      <strong>
        Should the Health Impact Fund replace the existing system of incentives?
      </strong>
      Clearly: no. The conventional incentives from patent-protected markups
      remain in place. The Health Impact Fund merely gives pharmaceutical
      innovators the additional option of registering a new medicine and then
      receiving reward payments according to health impact.
    </p>

    <p>
      <strong>How is the Health Impact Fund financed?</strong>
      The Health Impact Fund might be financed by states, for example, most
      plausibly in proportion to their gross national incomes. Another possible
      source of funding are international taxes, which might be imposed on
      greenhouse gas emissions or on certain destabilizing financial
      transactions.
    </p>

    <p>
      <strong>How much money does the Health Impact Fund require?</strong>A
      stable and efficient Health Impact Fund would require at least €3 billion.
      Of course, it could also work with a larger amount and would then attract
      a larger number of product registrations.
    </p>

    <p>
      <strong>Is this amount realistic?</strong>
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
      Pharmaceutical innovators can register any new product with the Health
      Impact Fund and then receive annual reward payments that are tied
      exclusively to the measured health gains achieved: the larger a product’s
      contribution to reducing the burden of disease, the higher the reward
      payment. A registered product is rewarded during its first ten years.
    </p>

    <p>
      <strong>And how are health gains measured?</strong>
      Health gains are measured in quality-adjusted life years (QALYs) and
      assessed through statistical sampling.
    </p>

    <p>
      <strong>What are quality-adjusted life years?</strong>
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
      No. There has already been a 5-year pilot project about the measurability
      of health gains, which included field work in India and was supported by a
      €2 million grant from the European Research Council. This project has
      shown how the therapeutic effects of medicines can be assessed even in
      poor countries.
    </p>
    <p>
      <strong>How can the Health Impact Fund be realized politically?</strong>
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
      Max@healthimpactfund.org
    </p>

    <h1>Advantages for …</h1>

    <strong>... patients.</strong>
    <ul>
      <li>Expanded arsenal of available medicines.</li>
      <li>Cutting-edge pharmaceuticals at affordable prices.</li>
    </ul>
    <strong>... pharmaceutical innovators.</strong>
    <ul>
      <li>
        New incentives for essential but heretofore unprofitable R&D projects.
      </li>
      <li>
        The opportunity to help poorer patients without ruining themselves or
      </li>
      <li>those patients financially.</li>
      <li>Enlarged contributions to world health.</li>
      <li>Improved public image.</li>
      <li>
        Realization of the internationally agreed Sustainable Development Goals.
      </li>
    </ul>
    <strong>... states and taxpayers.</strong>
    <ul>
      <li>
        Greater chance that patients will receive the medicines that are best
        for them.
      </li>
      <li>Much improved efficiency in the health sector.</li>
      <li>Reduced dangers from invasive diseases of the poor.</li>
      <li>Improvements in global health.</li>
      <li>Reduction of the economic burdens from disease.</li>
      <li>
        Gains in epidemiological knowledge from the required health impact
        assessments.
      </li>
      <li>
        Genuine North-South partnership for the production of global public
        goods.
      </li>
      <li>
        Establishment of a transformative innovation in the promotion of
        innovations
      </li>
    </ul>
  </Layout>
)

export default injectIntl(SecondPage)
