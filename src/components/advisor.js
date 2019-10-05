import React from "react"

import {
  injectIntl,
  FormattedMessage
} from "gatsby-plugin-intl"


const Advisor = ({data}) => {

  let showLongDescription = false;

  return (

    <>
      <li onClick={
          () => {
            if (!showLongDescription) {
              document.getElementById(data.id).classList.remove("hidden");
            } else {
              document.getElementById(data.id).classList.add("hidden");
            }
            showLongDescription = !showLongDescription;
          }}
      >
        <strong>{data.name}</strong>

        <p className="description">
          <FormattedMessage id={data.description} />
        </p>

        <p id={data.id} className="description-long hidden">
          <FormattedMessage id={data.description_long} />
        </p>
      </li>
    </>

  )
}

export default injectIntl(Advisor)