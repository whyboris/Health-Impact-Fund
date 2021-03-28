import React from "react"

import Swiper from 'react-id-swiper';

import './swiper.css'

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const PullQuote = ({data}) => {

  const params = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 20000,
      disableOnInteraction: true
    }
  }

  return (
    <>
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

        <Swiper {...params}>

          <div className="pull-quote">
            <FormattedMessage id="intro.quote_jayasree_text" />
            <span className="quote-author">
              <FormattedMessage id="intro.quote_jayasree_name" />
            </span>
          </div>

          <div className="pull-quote">
            <FormattedMessage id="intro.quote_jami_text" />
            <span className="quote-author">
              <FormattedMessage id="intro.quote_jami_name" />
            </span>
          </div>

          <div className="pull-quote">
            <FormattedMessage id="intro.quote_norway_text" />
            <span className="quote-author">
              <FormattedMessage id="intro.quote_norway_name" />
            </span>
          </div>

          <div className="pull-quote">
            <FormattedMessage id="intro.quote_tom_text" />
            <span className="quote-author">
              <FormattedMessage id="intro.quote_tom_name" />
            </span>
          </div>

        </Swiper>
      </div>
    </>
  )
}

export default injectIntl(PullQuote)
