import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MailChimpComponent extends React.Component {
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
      <div className="mailchimp">
        <form onSubmit={this._handleSubmit}>
          <div className="inputs">
            <span>Email:</span>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="required"
              name="email"
            />
            <span>First name:</span>
            <input type="text" onChange={this._handleChange} name="fname" />
            <span>Last name:</span>
            <input type="text" onChange={this._handleChange} name="lname" />
            <span>Country:</span>
            <input type="text" onChange={this._handleChange} name="country" />
            <span>Language:</span>
            <input type="text" onChange={this._handleChange} name="language" />
          </div>

          <input type="checkbox" />
          <label>
            I consent to receive emails from Incentives for Global Health
          </label>

          <input className="button" type="submit" value="Subscribe" />

          <p>
            After signing up you will begin receiving informational emails from
            Health Impact Fund / Incentives for Global Health. We do not share
            your information with any third parties.
          </p>

          <p>
            You can unsubscribe at any time by clicking the link in the footer
            of our emails.
          </p>

          <p>
            We use Mailchimp as our newsletter platform. By clicking subscribe,
            you acknowledge that your information will be transferred to
            Mailchimp for processing.{" "}
            <a href="https://mailchimp.com/legal/">
              Learn more about Mailchimp's privacy practices here.
            </a>
          </p>
        </form>
      </div>
    )
  }
}

// export default injectIntl(Newsletter)
