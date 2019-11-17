import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  de: "Deutsch",
  it: "Italiano",
}

const Language = () => {
  return (
    <div className="dropdown-content">
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
              {languageName[language]}
            </span>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
