import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import ReactSiema from 'react-siema'

import Step from "./step"

const Carousel = ({data}) => {

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
<>
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
</>
  )
}

export default injectIntl(Carousel)