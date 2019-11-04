import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Step = ({data}) => {

  return (

    <div className="step" style={{ flexDirection: data.mirror ?  'row-reverse' : 'initial' }}>
      <div className="step-image">
        <img src={data.img} alt={'step ' + data.step} />
      </div>
      <div className="step-text">
        <h1>{data.step}</h1>
        <p className="hif-step">
          <FormattedMessage id={data.text} />
        </p>
      </div>
    </div>

  )
}

export default injectIntl(Step)