import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  de: "German / Deutsch",
  en: "English",
  es: "Spanish / Español",
  fr: "French / Français",
  hi: "Hindi / हिंदी",
  id: "ID / ID",
  it: "Italian / Italiano",
  ko: "Korean / 한국어",
  tr: "Turkish / Türk",
  ur: "Urdu / اردو",
  zh: "Chinese / 中文",
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
