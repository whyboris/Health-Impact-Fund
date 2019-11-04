import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Step from "../components/step"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReactSiema from 'react-siema'

const IndexPage = ({ intl }) => {

  let slider
  let theCurrentSlide = 1
  const siemaOptions = {
    duration: 150,
  }

  const doTheThing = () => {

    setTimeout(() => {
      const theCurrentSlide = slider.currentSlide

      const leftArrowRef = document.getElementById("leftArrow")

      if (theCurrentSlide === 0) {
        leftArrowRef.classList.add("hidden")
      } else {
        leftArrowRef.classList.remove("hidden")
      }

      const rightArrowRef = document.getElementById("rightArrow")

      if (theCurrentSlide === 4) {
        rightArrowRef.classList.add("hidden")
      } else {
        rightArrowRef.classList.remove("hidden")
      }

      document.getElementById("currentStep").innerText = "0" + (theCurrentSlide + 1).toString()

    }, 160)
  }

  // HACK: Once page is loaded set up the listeners for every step!
  setTimeout(() => {
    const allSteps = document.getElementsByClassName("step");

    for (let element of allSteps) {
      element.addEventListener('mouseup', e => {
        doTheThing()
      })
    };
  }, 100)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`Health Impact Fund`, `HIF`, `Global Health`]}
      />

      <div style={{ textAlign: `center`, margin: `20px auto` }}>
        <img
          src="http://temp.yboris.com/hif/0.png"
          alt="Health Impact Fund stylized summary graphic"
          style={{ maxWidth: `100%` }}
        />
      </div>

      <div className="intro-and-tagline">
        <h1>
          <FormattedMessage id="intro.hif" />
        </h1>
        <h2>
          <FormattedMessage id="intro.hif_tagline" />
        </h2>
      </div>

      <p className="center-block">
        <FormattedMessage id="intro.hif_description" />
      </p>

      <ReactSiema {...siemaOptions} ref={siema => (slider = siema)} >
        <div>
          <Step
            data={{
              step: "01.",
              img: "http://temp.yboris.com/hif/1.png",
              text: "intro.step_01",
              mirror: false,
            }}
          />
        </div>

        <div>
          <Step
            data={{
              step: "02.",
              img: "http://temp.yboris.com/hif/2.png",
              text: "intro.step_02",
              mirror: false,
            }}
          />
        </div>

        <div>
          <Step
            data={{
              step: "03.",
              img: "http://temp.yboris.com/hif/3.png",
              text: "intro.step_03",
              mirror: false,
            }}
          />
        </div>

        <div>
          <Step
            data={{
              step: "04.",
              img: "http://temp.yboris.com/hif/4.png",
              text: "intro.step_04",
              mirror: false,
            }}
          />
        </div>
        <div>
          <Step
            data={{
              step: "05.",
              img: "http://temp.yboris.com/hif/5.png",
              text: "intro.step_05",
              mirror: false,
            }}
          />
        </div>
      </ReactSiema>

      <div
        className="carousel-navigation carousel-left"
        onClick={() => {
            slider.prev()
            theCurrentSlide = (slider.currentSlide)
            document.getElementById("currentStep").innerText = "0" + (theCurrentSlide + 1).toString()

            if (theCurrentSlide === 0) {
              document.getElementById("leftArrow").classList.add("hidden")
            }

            document.getElementById("rightArrow").classList.remove("hidden")

          }
        }
      >
        <svg
          id="leftArrow"
          className="hidden"
          style={{ transform: "rotate(90deg)", marginRight: "30px" }}
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
              fill="#80cf0f"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="9.89474" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span id="currentStep">01</span>

      </div>
      <div className="carousel-navigation carousel-center">
        <span className="total-steps">/</span>
      </div>
      <div
        className="carousel-navigation carousel-right"
        onClick={() => {
            slider.next()
            theCurrentSlide = (slider.currentSlide)
            document.getElementById("currentStep").innerText = "0" + (theCurrentSlide + 1).toString();


            document.getElementById("leftArrow").classList.remove("hidden")

            if (theCurrentSlide === 4) {
              document.getElementById("rightArrow").classList.add("hidden")
            }

          }
        }
      >
        <span className="total-steps">05</span>
        <svg
          id="rightArrow"
          style={{ transform: "rotate(-90deg)", marginLeft: "30px" }}
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
              fill="#80cf0f"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="9.89474" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <br />
      <br />

      <div className="panel-container">
        <div className="thin-panel first-panel">
          <em>Benefits for Innovators.</em>
          <br />
          Improve the health situation and save lives - while opening up new
          markets and securing research that is not covered by the patent
          system.
          <Link to="/benefits">
            <button className="button">Read how</button>
          </Link>
        </div>

        <div className="thin-panel">
          <em>Benefits for Government and Taxpayers.</em>
          <br />
          Reduce economic burdens from diseases with a more efficient spending
          on medicine and research.
          <Link to="/benefits">
            <button className="button">Read how</button>
          </Link>
        </div>

        <div className="thin-panel last-panel">
          <em>Benefits for Patients.</em>
          <br />
          Affordable drugs and a longer and healthier life
          <div className="donation-box">
            Make drugs affordable for everyone. Donate to support our mission
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7ULUVQSNFV8C">
              <button className="button">
                <FormattedMessage id="navigation.donate" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="quote-container">
        <svg
          className="quote-svg"
          width="170"
          height="133"
          viewBox="0 0 170 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.71964 132.021V122.139C20.2907 117.133 30.9631 109.293 38.7368 98.6206C46.5105 87.8165 50.3973 76.6171 50.3973 65.0224C50.3973 62.519 50.002 60.6744 49.2115 59.4886C48.8162 58.698 48.2892 58.3028 47.6304 58.3028C46.9716 58.3028 45.9175 58.8298 44.4682 59.8839C40.252 62.9143 34.9817 64.4295 28.6573 64.4295C21.0153 64.4295 14.2957 61.3991 8.49837 55.3382C2.83279 49.1456 0 41.8331 0 33.4006C0 24.441 3.29394 16.6673 9.88182 10.0795C16.4697 3.35982 24.5728 0 34.1911 0C45.127 0 54.6136 4.54564 62.6508 13.6369C70.8197 22.5964 74.9042 34.7181 74.9042 50.002C74.9042 67.7893 69.4363 83.732 58.5004 97.8301C47.5645 111.928 30.3043 123.325 6.71964 132.021ZM101.783 132.021V122.139C115.354 117.133 126.026 109.293 133.8 98.6206C141.574 87.8165 145.46 76.6171 145.46 65.0224C145.46 62.519 145.065 60.6744 144.275 59.4886C143.879 58.698 143.352 58.3028 142.694 58.3028C142.035 58.3028 140.981 58.8298 139.531 59.8839C135.315 62.9143 130.045 64.4295 123.72 64.4295C116.078 64.4295 109.359 61.3991 103.562 55.3382C97.8959 49.1456 95.0632 41.8331 95.0632 33.4006C95.0632 24.441 98.3571 16.6673 104.945 10.0795C111.533 3.35982 119.636 0 129.254 0C140.19 0 149.677 4.54564 157.714 13.6369C165.883 22.5964 169.967 34.7181 169.967 50.002C169.967 67.7893 164.499 83.732 153.564 97.8301C142.628 111.928 125.367 123.325 101.783 132.021Z"
            fill="#D3EDAE"
          />
        </svg>

        <div
          className="pull-quote"
          id="firstQuote"
          onClick={() => {
            document.getElementById("firstQuote").classList.add("quote-hidden")
            document
              .getElementById("secondQuote")
              .classList.remove("quote-hidden")
          }}
        >
          With sufficient funding, the HIF could be an effective way of
          stimulating investment from small and large bio-pharmaceutical
          companies to address the needs of low-income populations. It would
          align commercial incentives with social goals of reducing excess
          morbidity and mortality. It could support companies, including
          Janssen, in their efforts to develop innovative products within a
          competitive, market-based framework that rewards outcomes.
          <span className="quote-author">
            Jami Taylor, Janssen Pharmaceuticals
          </span>
          <div className="quote-indicator">1 / 3</div>
        </div>

        <div
          className="pull-quote quote-hidden"
          id="secondQuote"
          onClick={() => {
            document.getElementById("secondQuote").classList.add("quote-hidden")
            document
              .getElementById("thirdQuote")
              .classList.remove("quote-hidden")
          }}
        >
          An international Health Impact Fund (HIF) should be established as a
          supplement to thecurrent patent system. Through HIF pharmaceutical
          companies can voluntarily register theirdrugs and commit to making
          them available at the lowest price against payment of supportover ten
          years from the Fund on the basis of major health impact their drugs
          have. This givescompanies incentives to develop medicines for those
          with the greatest health needs and notonly those with the greatest
          purchasing power.
          <span className="quote-author">
            Liberal (Venstre) Party of Norway
          </span>
          <div className="quote-indicator">2 / 3</div>
        </div>

        <div
          className="pull-quote quote-hidden"
          id="thirdQuote"
          onClick={() => {
            document.getElementById("thirdQuote").classList.add("quote-hidden")
            document
              .getElementById("firstQuote")
              .classList.remove("quote-hidden")
          }}
        >
          The HIF plan is both innovative and timely. There is a clear need for
          incentives for creating medicines with a significant global health
          impact and ensuring their widespread and sustained availability. A
          market-based approach, which does not require wholesale changes to
          internationalor national intellectual property laws, should be
          well-received by potential donors and industry participants alike.
          <span className="quote-author">Tom Bollyky</span>
          <div className="quote-indicator">3 / 3</div>
        </div>
      </div>

      <div className="panel-container">
        <div className="thin-panel first-panel">
          <em>What.</em>
          <br />
          The Health Impact Fund offers an innovative pay-for-performance
          mechanism which rewards new pharmaceuticals based on actual health
          impact.
          <Link to="/what">
            <button className="button">Read how</button>
          </Link>
        </div>

        <div className="thin-panel first-panel">
          <em>Why.</em>
          <br />
          Most diseases and premature deaths worldwide are caused by poverty –
          poor people can't afford appropriate medicines.
          <Link to="/problem">
            <button className="button">What else?</button>
          </Link>
        </div>

        <div className="thin-panel">
          <em>How.</em>
          <br />
          How does the Health Impact Fund ensure that drug research is
          economically viable?
          <Link to="/how">
            <button className="button">How it works</button>
          </Link>
        </div>
      </div>

      <div className="video-container">
        <iframe
          title="Medicine for the 99 percent"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/rTMqGbTNkNg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hip-book">
        <img
          alt="Health Impact Fund book"
          src="https://healthimpactfund.org/wp-content/uploads/2015/12/HIF_Front_Cover-big.jpg"
        />
        <div className="green-block"></div>
        <p>
          <em>
            The Health Impact Fund complements to the existing rules in the
            development and distribution of new medicines.
          </em>
          Read in this book how we proved feasibility and how it would produce
          large gains in global public health and economic productivity at
          comparatively low cost.
        </p>

        <Link to="/publications">
          <div className="button button-first">Explore more papers</div>
        </Link>

        <a href="https://healthimpactfund.org/wp-content/uploads/2015/12/hif_book.pdf">
          <div className="button button-second">Read the book</div>
        </a>
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)
