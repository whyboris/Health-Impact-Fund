import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MyGatsbyComponent extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = (e) => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch((err) => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Newsletter</h1>


        <div className="mailchimp">
          <form onSubmit={this._handleSubmit}>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="First name"
              name="fname"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="Last name"
              name="lname"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="Country"
              name="country"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="Language"
              name="language"
            />

            <p>
              After signing up you will begin receiving informational emails
              from Health Impact Fund / Incentives for Global Health. We will
              not share your information with any third parties.
            </p>

            <input type="checkbox" />
            <label>
              I consent to receive emails from Incentives for Global Health
            </label>
            <br></br>
            <p>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails.
            </p>

            <p>
              We use Mailchimp as our newsletter platform. By clicking below to
              subscribe, you acknowledge that your information will be
              transferred to Mailchimp for processing.{" "}
              <a href="https://mailchimp.com/legal/">
                Learn more about Mailchimp's privacy practices here.
              </a>
            </p>

            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

// export default injectIntl(Newsletter)
