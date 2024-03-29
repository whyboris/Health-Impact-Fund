import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"

import Icon from "../images/language.svg"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Header = ({ siteTitle, showRTL }) => (
  <header className={ showRTL ? 'nav-link-rtl' : ''}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <svg
          style={{ marginTop: "10px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="48"
          fill="none"
        >
          <path
            d="M3.074 15.283H0v14.844h3.074V15.283zM19.438 19.2c.468.2.893.512 1.274.98.307.38.512.85.63 1.405.073.366.103.908.103 1.625l-.015 6.9h-2.942v-6.98c0-.4-.073-.76-.205-1.025-.25-.512-.732-.76-1.405-.76-.8 0-1.332.322-1.64.98-.16.35-.234.76-.234 1.26v6.53h-2.898v-6.53c0-.644-.073-1.127-.205-1.42-.234-.527-.717-.8-1.42-.8-.82 0-1.376.264-1.654.8-.16.307-.234.747-.234 1.347v6.602h-2.9V19.177h2.78v1.596c.35-.57.688-.98 1-1.215.556-.425 1.273-.644 2.166-.644.834 0 1.522.2 2.035.556a3.26 3.26 0 0 1 .951 1.317c.38-.644.85-1.113 1.405-1.42.585-.307 1.244-.454 1.976-.454a3.77 3.77 0 0 1 1.42.278zm11.665 3.207c-.395-.644-1.025-.98-1.903-.98-1.054 0-1.77.498-2.166 1.48-.205.527-.307 1.186-.307 2 0 1.274.337 2.167 1.024 2.694.4.308.893.454 1.45.454.805 0 1.42-.307 1.844-.922s.63-1.435.63-2.46c.015-.864-.2-1.6-.57-2.254zm2.196-2.064c.893.952 1.347 2.342 1.347 4.172 0 1.932-.44 3.4-1.317 4.42a4.28 4.28 0 0 1-3.381 1.522c-.878 0-1.6-.22-2.196-.66-.322-.234-.63-.6-.937-1.054v5.724h-2.84v-15.3h2.752v1.625c.307-.483.644-.85.995-1.127.644-.483 1.405-.732 2.283-.732a4.33 4.33 0 0 1 3.293 1.42zm9.47 4.45a3.29 3.29 0 0 1-.556.278c-.2.073-.44.132-.776.2l-.66.117c-.615.102-1.054.234-1.317.395-.454.264-.673.673-.673 1.215 0 .483.132.85.4 1.07s.615.322 1 .322c.63 0 1.2-.176 1.727-.542s.805-1.025.82-1.976v-1.07h.015zm-1.756-1.332c.527-.073.922-.146 1.142-.25.4-.176.615-.44.615-.82 0-.454-.16-.76-.468-.937-.322-.176-.776-.264-1.4-.264-.688 0-1.17.16-1.464.498-.205.25-.337.585-.4 1h-2.78c.058-.966.337-1.742.805-2.37.76-.966 2.064-1.45 3.923-1.45 1.2 0 2.283.234 3.22.717s1.405 1.376 1.405 2.694v5.036l.015 1.274c.015.38.073.63.176.76a1.01 1.01 0 0 0 .424.337v.424H43.12a2.72 2.72 0 0 1-.176-.629l-.073-.66c-.395.425-.864.8-1.376 1.098-.615.35-1.317.527-2.108.527-.995 0-1.83-.278-2.474-.85-.66-.57-.98-1.376-.98-2.415 0-1.347.527-2.328 1.566-2.928.57-.322 1.42-.57 2.532-.703l.98-.102zm13.684-.366a2.69 2.69 0 0 0-.41-1.113c-.322-.44-.82-.66-1.508-.66-.966 0-1.625.483-2 1.435-.2.512-.278 1.186-.278 2.035 0 .805.088 1.45.278 1.932.337.908.995 1.376 1.932 1.376.673 0 1.156-.176 1.434-.542s.454-.834.512-1.405h2.927c-.073.878-.38 1.698-.95 2.474-.893 1.26-2.24 1.888-3.996 1.888-1.77 0-3.074-.527-3.893-1.566-.834-1.054-1.244-2.4-1.244-4.07 0-1.888.454-3.352 1.376-4.392.922-1.054 2.196-1.566 3.806-1.566 1.376 0 2.503.307 3.38.922s1.4 1.713 1.55 3.264h-2.927v-.015zM58.46 21.3v-2.05h1.537V16.2h2.84v3.06h1.786v2.05h-1.786v5.797c0 .454.06.732.176.834.117.117.468.16 1.054.16h.278c.103 0 .2-.015.293-.015v2.137l-1.36.044c-1.36.044-2.283-.2-2.78-.703-.322-.322-.483-.834-.483-1.522v-6.748H58.46v.015z"
            fill="#80cf0f"
          />
          <path
            d="M9.675 14.844V0h3.088v5.65h5.767V0h3.074v14.844H18.53v-6.63h-5.767v6.63H9.675zM27.2 6.573c-.4.425-.66.98-.76 1.698h4.947c-.06-.76-.307-1.347-.76-1.727-.454-.395-1.025-.586-1.698-.586-.747-.015-1.317.2-1.727.615zm4.3-2.5c.76.337 1.4.878 1.903 1.625.454.66.746 1.405.878 2.27.073.498.102 1.23.088 2.18h-7.992c.044 1.098.425 1.874 1.142 2.313.44.278.966.4 1.58.4.66 0 1.186-.16 1.595-.498.22-.176.424-.44.585-.76h2.927c-.073.644-.44 1.317-1.07 1.976-.98 1.07-2.357 1.596-4.128 1.596a6 6 0 0 1-3.864-1.347c-1.112-.893-1.67-2.37-1.67-4.392 0-1.903.498-3.352 1.508-4.377 1-1 2.313-1.522 3.923-1.522.966.015 1.83.2 2.6.527zM41.92 9.5c-.2.117-.366.205-.556.278s-.44.132-.776.2l-.66.117c-.615.102-1.054.234-1.317.395-.454.264-.673.673-.673 1.215 0 .483.132.85.4 1.07s.615.322 1 .322c.63 0 1.2-.176 1.727-.542s.805-1.025.82-1.976V9.5h.015zm-1.756-1.332c.527-.073.922-.146 1.142-.25.4-.176.615-.44.615-.82 0-.454-.16-.76-.468-.937-.322-.176-.776-.263-1.4-.263-.688 0-1.17.16-1.464.498-.205.25-.337.586-.4 1h-2.78c.06-.966.337-1.742.805-2.37.76-.966 2.064-1.45 3.923-1.45 1.2 0 2.283.234 3.22.717s1.405 1.376 1.405 2.694v5.036l.015 1.274c.015.38.073.63.176.76s.234.25.424.337v.425H42.27a2.76 2.76 0 0 1-.176-.63l-.073-.66c-.395.425-.864.8-1.376 1.098-.615.35-1.317.527-2.108.527-.995 0-1.83-.278-2.474-.85-.66-.57-.98-1.376-.98-2.415 0-1.347.527-2.328 1.566-2.928.57-.322 1.42-.57 2.532-.703l.98-.102zM50.205 0h-2.87v14.844h2.87V0zm1.683 6.018v-2.05h1.537V.9h2.84v3.06h1.786v2.05h-1.786v5.797c0 .454.058.732.176.834.117.117.468.16 1.054.16h.278c.102 0 .2-.015.293-.015v2.137l-1.36.044c-1.36.044-2.283-.2-2.78-.703-.322-.322-.483-.834-.483-1.522V6.018H51.89zm15.866-2.095a3.19 3.19 0 0 1 1.361 1.083c.307.4.483.834.556 1.26.073.44.102 1.142.102 2.123v6.44h-2.927V8.154c0-.586-.102-1.07-.293-1.435-.263-.512-.746-.76-1.478-.76-.746 0-1.317.25-1.712.76s-.586 1.23-.586 2.167v5.943h-2.87V.044h2.87v5.24c.4-.644.893-1.083 1.434-1.332a4.06 4.06 0 0 1 1.712-.381c.673 0 1.288.117 1.83.35zM30.474 32.85h10.583v2.606h-7.494v3.4h6.572v2.576h-6.572v6.22h-3.088V32.85zm15.222 3.834V43.3c0 .63.073 1.098.22 1.405.264.556.776.834 1.537.834.98 0 1.64-.395 2.005-1.186.2-.424.278-.995.278-1.698v-5.973h2.913v10.98h-2.78V46.1c-.03.03-.088.132-.205.307-.102.16-.234.322-.38.44-.454.4-.878.673-1.303.82s-.907.22-1.464.22c-1.625 0-2.708-.586-3.28-1.757-.307-.644-.468-1.596-.468-2.855V36.67h2.927v.015zm18.574.63c.717.6 1.083 1.58 1.083 2.957v7.392H62.41v-6.675c0-.57-.073-1.025-.234-1.332-.278-.57-.82-.85-1.595-.85-.966 0-1.625.4-2 1.244-.2.44-.278.995-.278 1.67v5.943h-2.87v-10.95h2.78v1.596c.366-.57.717-.966 1.04-1.215.586-.44 1.332-.66 2.24-.66 1.127-.015 2.05.293 2.766.878zm10.276 7.363c.425-.6.63-1.4.63-2.342 0-1.347-.337-2.298-1-2.884-.4-.35-.893-.527-1.45-.527-.834 0-1.45.322-1.844.95s-.585 1.42-.585 2.357c0 1 .205 1.83.6 2.43s1 .908 1.815.908 1.42-.293 1.844-.893zm-.717-7.817a3.57 3.57 0 0 1 1.259 1.215v-5.24H78V47.65h-2.78v-1.522c-.4.644-.878 1.127-1.405 1.42s-1.17.44-1.947.44c-1.288 0-2.356-.512-3.235-1.552s-1.317-2.37-1.317-3.996c0-1.874.424-3.352 1.288-4.42s2.02-1.6 3.454-1.6c.673.015 1.26.16 1.77.454z"
            fill="#222"
          />
        </svg>
      </Link>

      <div className="header-navigation">
        <div className="nav-item hamburger-icon">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H20V2.5H0V0ZM0 6.25H20V8.75H0V6.25ZM0 12.5H20V15H0V12.5Z"
              fill="black"
            />
          </svg>
        </div>

        {/* ABOUT  dropdown */}

        <div className="nav-item dropdown">
          <div className="dropbtn">
            <Link to="/about">
              <FormattedMessage id="navigation.about" />
            </Link>
          </div>

          <svg
            style={{ marginLeft: "8px" }}
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
          <div className="dropdown-content">
            <Link to="/problem">
              <FormattedMessage id="navigation.problem" />
            </Link>
            <Link to="/what">
              <FormattedMessage id="navigation.what" />
            </Link>
            <Link to="/how">
              <FormattedMessage id="navigation.how" />
            </Link>
            <Link to="/benefits">
              <FormattedMessage id="navigation.benefits" />
            </Link>
            <Link to="/quotes">
              <FormattedMessage id="navigation.quotes" />
            </Link>
            <Link to="/faq">
              <FormattedMessage id="navigation.faq" />
            </Link>
            <Link to="/newsletter">
              <FormattedMessage id="navigation.newsletter" />
            </Link>
          </div>
        </div>

        {/* NEWS */}
        <div className="nav-item dropdown">
          <div className="dropbtn">
            <Link to="/news">
              <FormattedMessage id="navigation.news" />
            </Link>
          </div>

          {/* <svg
            style={{ marginLeft: "8px" }}
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
          <div className="dropdown-content">
            <Link to="/news">
              <FormattedMessage id="navigation.recent_events" />
            </Link>
          </div> */}
        </div>

        {/* TEAM */}
        <div className="nav-item dropdown">
          <div className="dropbtn">
            <Link to="/team">
              <FormattedMessage id="navigation.team" />
            </Link>
          </div>

          <svg
            style={{ marginLeft: "8px" }}
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
          <div className="dropdown-content">
            <Link to="/team">
              <FormattedMessage id="navigation.igh" />
            </Link>
            <Link to="/team#board">
              <FormattedMessage id="navigation.board" />
            </Link>
            <Link to="/team#management">
              <FormattedMessage id="navigation.management_team" />
            </Link>
            <Link to="/team#advisory">
              <FormattedMessage id="navigation.advisory_board" />
            </Link>
            <Link to="/team#scientific">
              <FormattedMessage id="navigation.scientific_advisors" />
            </Link>
            <Link to="/team#opportunities">
              <FormattedMessage id="navigation.opportunities" />
            </Link>
          </div>
        </div>

        {/* PUBLICATIONS */}
        <div className="nav-item dropdown">
          <div className="dropbtn">
            <Link to="/publications">
              <FormattedMessage id="navigation.publications" />
            </Link>
          </div>

          <svg
            style={{ marginLeft: "8px" }}
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
          <div className="dropdown-content">
            <Link to="/publications">
              <FormattedMessage id="navigation.book" />
            </Link>
            <Link to="/publications#publications">
              <FormattedMessage id="navigation.discussion_papers" />
            </Link>
            <Link to="/publications#videos">
              <FormattedMessage id="navigation.videos" />
            </Link>
          </div>
        </div>

        <div className="nav-item dropdown dropdown-language">
          <div className="dropbtn dropbtn-language">
            <Icon className="language-selection" />
          </div>
          <Language />
        </div>

      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  showRTL: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: '',
  showRTL: false,
}

export default injectIntl(Header)
