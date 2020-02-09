import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName1 = {
  ar: "Arabic",
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  id: "ID",
  it: "Italian",
  ko: "Korean",
  tr: "Turkish",
  ur: "Urdu",
  zh: "Chinese",
}

const languageName2 = {
  ar: "عربى",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  hi: "हिंदी",
  id: "ID",
  it: "Italiano",
  ko: "한국어",
  tr: "Türk",
  ur: " اردو",
  zh: "中文",
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
              <div className="language-english">
                {languageName1[language]}
              </div>
              <div className="language-original">
                {languageName2[language]}
              </div>
            </span>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
