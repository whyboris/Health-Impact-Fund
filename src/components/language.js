import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import { languageNames } from "../intl/languages";

const Language = () => {
  return (
    <div className="dropdown-content dropdown-content-language">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <span
              key={language}
              onClick={() => changeLocale(language)}
              className="language-selection"
              style={{
                color: currentLocale === language ? `#80CF0F` : `#222222`,
              }}
            >
              <div className="language-english">
                {languageNames[language].english}
              </div>
              <div className="language-original">
                {languageNames[language].native}
              </div>
            </span>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
