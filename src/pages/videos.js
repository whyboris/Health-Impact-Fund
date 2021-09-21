import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Videos = ({ intl }) => {
  setTimeout(() => {

    const docRef = typeof document !== `undefined` ? document : undefined;
    if (!docRef) { return };

    const youtube = docRef.getElementById("main-video");
    if (youtube) {
      const source = "https://img.youtube.com/vi/"+ youtube.dataset.embed +"/sddefault.jpg";
      const image = new Image();
      image.src = source;

      image.addEventListener( "load", () => {
          youtube.appendChild( image );
      });

      youtube.addEventListener( "click", function() {
        const iframe = docRef.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

        this.innerHTML = "";
        this.appendChild( iframe );
      } );
    }

  }, 1000)

  return(
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "videos.videos" })}
      description={intl.formatMessage({ id: "general.description" })}
    />
    <h1>
      <FormattedMessage id="videos.videos" />
    </h1>

    <div id="main-video" className="youtube" data-embed="rTMqGbTNkNg">
      <div className="placeholder-gradient"></div>
      <div className="placeholder-channel"></div>
      <span className="placeholder-title">Reimagining pharmaceutical innovation | Thomas Pogge at TEDxCanberra</span>
      <div className="play-button"></div>
    </div>

{/*
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
*/}

    <br />
    <br />

    <p><FormattedMessage id="videos.coming_soon" /></p>
    <br />
    <br />

  </Layout>
)
}

export default injectIntl(Videos)
