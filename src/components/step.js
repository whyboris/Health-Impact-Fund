import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// import arrow from "../images/arrow.png"

const Step = ({data}) => {

  return (

    <>
      <div className="step" style={{ flexDirection: data.mirror ?  'row-reverse' : 'initial' }}>
        <div className="step-image">
          <img src={data.img} />
        </div>
        <div className="step-text">
          <h1>{data.step}</h1>
          <p className="hif-step">
            <FormattedMessage id={data.text} />
          </p>
        </div>

        {/* <div
          className="step-arrow"
          style={{ display: data.arrow ? 'initial' : 'none' }}
        >
          <img
            src={arrow}
            style={{ transform: data.mirror ? 'scaleX(-1)' : 'scaleX(1)' }}
          />

        </div> */}

      </div>

    </>

  )
}

export default injectIntl(Step)