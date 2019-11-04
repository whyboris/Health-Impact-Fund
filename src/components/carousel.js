import React from "react"

import Swiper from 'react-id-swiper';

import 'react-id-swiper/lib/styles/scss/swiper.scss';

import { injectIntl } from "gatsby-plugin-intl"

import Step from "./step"

const Carousel = ({data}) => {

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return (

    <Swiper {...params}>

      <div>
        <Step
          data={{
            step: "01",
            img: "http://temp.yboris.com/hif/1.png",
            text: "intro.step_01",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "02",
            img: "http://temp.yboris.com/hif/2.png",
            text: "intro.step_02",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "03",
            img: "http://temp.yboris.com/hif/3.png",
            text: "intro.step_03",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "04",
            img: "http://temp.yboris.com/hif/4.png",
            text: "intro.step_04",
            mirror: false,
          }}
        />
      </div>
      <div>
        <Step
          data={{
            step: "05",
            img: "http://temp.yboris.com/hif/5.png",
            text: "intro.step_05",
            mirror: false,
          }}
        />
      </div>

    </Swiper>

  )
}

export default injectIntl(Carousel)