import React from "react"

import Swiper from 'react-id-swiper';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import './swiper.css'

import { injectIntl } from "gatsby-plugin-intl"

import Step from "./step"

const Carousel = ({data}) => {

  SwiperCore.use([Pagination, Navigation])

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
            img: '/img/1.png',
            text: "intro.step_01",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "02",
            img: '/img/2.png',
            text: "intro.step_02",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "03",
            img: '/img/3.png',
            text: "intro.step_03",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            step: "04",
            img: '/img/4.png',
            text: "intro.step_04",
            mirror: false,
          }}
        />
      </div>
      <div>
        <Step
          data={{
            step: "05",
            img: '/img/5.png',
            text: "intro.step_05",
            mirror: false,
          }}
        />
      </div>

    </Swiper>

  )
}

export default injectIntl(Carousel)
