import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const News = ({ intl }) => {

  setTimeout(() => {

    const youtube = document.getElementById("main-video");

    if (youtube) {
      const source = "https://img.youtube.com/vi/"+ youtube.dataset.embed +"/sddefault.jpg";
      const image = new Image();
      image.src = source;

      image.addEventListener( "load", () => {
          youtube.appendChild( image );
      });

      youtube.addEventListener( "click", function() {
        const iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

        this.innerHTML = "";
        this.appendChild( iframe );
      } );
    }

  }, 1000)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "news.title" })}
        description={intl.formatMessage({ id: "general.description" })}
      />

      <h1>
        <FormattedMessage id="news.heading" />
      </h1>


      <div className="news-item">
        <span className="date date-float-left">2020.12.07</span>

        <div className="news-text news-text-full-width">
          <h2>
            After Covid: Global Health, Big Pharma & the Health Impact Fund
          </h2>

          <p>
            December 7 at 6pm CET on Zoom
          </p>

          <a href="https://www.eventbrite.ca/e/after-covid-global-health-big-pharma-and-the-health-impact-fund-tickets-128430921343">
            <img className="temp-image" src="/news/2020.12.07-event.jpg" alt="Jami Taylor" />
          </a>
        </div>

      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/liberation.png" alt="Libération" />
        </div>

        <span className="date">2020-11-10</span>

        <div className="news-text">
          <h2>Op-ed in Libération supporting the Health Impact Fund</h2>

          <p>
            Timothy Daly, Aidan Hollis, Felicitas Holzer, and Thomas Pogge make the case
            for the Health Impact Fund in France’s progressive newspaper, Libération.
          </p>
          <p>
            Read more:{" "}
            <a href="https://www.liberation.fr/debats/2020/11/09/le-fonds-d-impact-sanitaire-pour-une-recherche-pharmaceutique-plus-equitable_1805063">
              liberation.fr
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <span className="date date-float-left">2020.08.10</span>

        <div className="news-text news-text-full-width">
          <h2>
            Network 20/20 hosts webinar on the Health Impact Fund
          </h2>

          <p>
            Network 20/20 hosts webinar on the Health Impact Fund, featuring Gary Gottlieb, Thomas Pogge and Jami Taylor.
          </p>
          <p>
            <em>
              Is a Health Impact Fund an Equitable Solution to Fund Vaccine Access for All?
            </em>
          </p>

          <div id="main-video" className="youtube" data-embed="quDCE_q1GtQ">
            <div className="placeholder-gradient"></div>
            <div className="placeholder-channel"></div>
            <span className="placeholder-title">Is a Health Impact Fund an Equitable Solution to Fund Vaccine Access for All?</span>
            <div className="play-button"></div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/Jami.jpg" alt="Jami Taylor" />
        </div>

        <span className="date">2020.07.10</span>

        <div className="news-text">
          <h2>
            Jami Taylor joins Incentives for Global Health Board of Directors
          </h2>

          <p>
            Incentives for Global Health welcomes Jami Taylor to the Board of
            Directors.
          </p>
          <p>
            Jami Taylor is a recognized expert in innovative financing for
            pharmaceutical research, development, access and delivery. Most
            recently, as an investor relations lead at Reata Pharmaceuticals, she
            helped to secure a $350 million investment from Blackstone Life
            Sciences to advance promising compounds within Reata’s pipeline.
            Previously, Jami was a managing director at Stanton Park Capital, a
            boutique investment bank providing merger and acquisition, capital
            raising, and consulting services to private companies in the life
            sciences field.
          </p>
          <p>
            Earlier, Jami spent more than seven years in global leadership roles
            at Johnson & Johnson, working across Janssen R&D, Janssen Global
            Commercial Strategy, and key committees and functions at the Corporate
            level. There, she was a co-founder of the Johnson & Johnson Global
            Public Health organization.
          </p>
          <p>
            Prior to joining Johnson & Johnson, Jami spent more than 10 years at
            the firm she founded as an undergraduate, providing alliance
            development and communications services to an elite roster of clients,
            including major pharmaceutical and biotechnology companies.
          </p>
          <p>
            Jami’s experience beyond industry includes work with the White House
            Office of Public Liaison, members of the U.S. Congress, and the U.S.
            Departments of Treasury, Commerce, and Health & Human Services to
            advance legislative and policy priorities on a nationwide scale. In
            2014, Jami was named a Cross-Sector Leadership Fellow at the Presidio
            Institute, a program created by the White House Office of Social
            Innovation and Civic Participation to advance the work of leaders
            addressing society’s most complex challenges.
          </p>
          <p>
            Jami is an alumna of Northwestern University, Harvard University, and
            the University of Virginia. She is a frequent presenter at major
            international forums and a lecturer at leading universities, including
            the MIT Sloan School of Management, the Wharton School of the
            University of Pennsylvania, Harvard Law School and Harvard Business
            School.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/AmartyaSen.jpg" alt="Amartya Sen" />
        </div>

        <span className="date">2020.06.22</span>

        <div className="news-text">
          <h2>Amartya Sen honored</h2>

          <p>
            We are delighted that our International Advisory Board member Amartya
            Sen, winner of the 1998 Nobel Prize in Economics, has been honored
            with the Peace Prize of the German book trade.
          </p>
          <p>
            The team congratulates Professor Sen and adds its heartfelt thanks for
            his intellectual support of the Health Impact Fund idea.
          </p>
          <p>
            Read more:{" "}
            <a href="https://www.zeit.de/kultur/2020-06/philosoph-amartya-sen-erhaelt-friedenspreis">
              zeit
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img
            src="/news/black-lives-matter.png"
            alt="Black Lives Matter"
            title="Photo credit: Pixabay"
          />
        </div>

        <span className="date">2020.06.10</span>

        <div className="news-text">
          <h2>Black Lives Matter</h2>

          <p>
            Incentives for Global Health is committed to the worldwide effort to
            overcome racism everywhere: in policing and the penal system, in
            housing and credit, in education and employment, in health care and
            social security, in politics and the media, in our hearts and minds
            and everyday lives.
          </p>
          <p>
            In our world, poverty and racism are deeply intertwined and mutually
            reinforcing. Rules that systematically harm the poor are
            overwhelmingly harming people of color, and often persist precisely
            because of that.
          </p>
          <p>
            The rules of the pharma sector must reflect that the health and
            survival of all human beings has equal value. We call on governments
            to jointly create and finance a Health Impact Fund designed on this
            foundation. The Fund should reward pharmaceutical innovators for each
            registered product, sold without markup, according to the health gains
            achieved with it – regardless of whose health is at stake. Firms would
            earn no less from protecting a poor person or a person of color, and
            often much more than what this person could have paid themselves.
          </p>
          <p>
            For the Incentives for Global Health team, Black Lives Matter is about
            more than police violence; it is also about our work. We believe that
            health policy should reflect equity in access, not only to healthcare,
            but also safety and protection.
          </p>
          <p>Join us in this work!</p>
          <ul className="news-li">
            <li>
              Support the{" "}
              <a href="https://blacklivesmatter.com/">
                #BlackLivesMatter Global Network
              </a>
            </li>
            <li>
              Support <a href="http://m4bl.org/">Movement for Black Lives</a> call
              for housing and healthcare for all
            </li>
            <li>
              <a href="https://www.who.int/healthsystems/topics/equity/en/">
                Support equity in global health
              </a>
            </li>
            <li>
              Join and/or take action with{" "}
              <a href="https://whitecoats4blacklives.org/">
                #WhiteCoats4BlackLives
              </a>
            </li>
            <li>
              Join the{" "}
              <a href="https://www.bma.org.uk/news-and-opinion/we-stand-in-solidarity-bma-statement-on-black-lives-matter">
                international health worker solidarity with BLM
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img
            src="/news/india.jpg"
            alt="The Hindu"
            title="Photo credit: Pixabay"
          />
        </div>

        <span className="date">2020.06.06</span>

        <div className="news-text">
          <h2>The right time to shift pharma gears: The Hindu</h2>

          <p>
            The Health Impact Fund would get pharmaceutical firms interested in
            certain R&D projects that are unprofitable under the current regime –
            especially ones expected to produce large health gains among mostly
            poor people. Such projects would predominantly address communicable
            diseases, which continue to impose devastating disease burdens mainly
            upon the poor.
          </p>
          <p>
            Read more:{" "}
            <a href="https://www.thehindu.com/opinion/op-ed/a-right-time-to-shift-pharma-gears/article31761582.ece">
              The Hindu
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img
            src="/news/covid.jpg"
            alt="Covid-19"
            title="Photo credit: Pixabay"
          />
        </div>

        <span className="date">2020.06.03</span>

        <div className="news-text">
          <h2>Health Impact Fund and COVID-19 in STAT</h2>

          <p>
            For governments, a Covid-19 Health Impact Fund would reduce the
            current competition over which country gets vaccinated first, since
            all countries could collaborate to offer a joint reward. That would
            reduce their budgetary uncertainty, while increasing incentives for
            private investors.
          </p>
          <p>
            The key here is that we can afford to make some kinds of mistakes: We
            can pay too much; we can subsidize vaccines that don’t work out. But
            we cannot afford to discourage the pharmaceutical industry from
            participating in the search for the solutions we urgently and
            desperately need.
          </p>
          <p>
            Read more:{" "}
            <a href="https://www.statnews.com/2020/06/03/health-impact-fund-spur-development-equitable-use-covid-19-vaccine/">
              STAT
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/china.jpg" alt="CGTN" title="Photo credit: Pixabay" />
        </div>

        <span className="date">2020.06.02</span>

        <div className="news-text">
          <h2>China's official news channel, CGTN on the Health Impact Fund</h2>

          <p>
            Medications have done wonders for humanity. With the proposed Health
            Impact Fund reform, the pharmaceuticals sector could achieve much more
            still. The dark disaster of COVID-19 may yet give rise to a new dawn
            of massive progress in human health.
          </p>
          <p>
            Read more:{" "}
            <a href="https://news.cgtn.com/news/2020-06-02/Restructuring-pharmaceutical-innovation-QZq50NZOxi/index.html">
              CGTN
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img
            src="/news/krisha-kops.jpg"
            alt="Leila Janah"
            title="Photo credit: Pixabay"
          />
        </div>

        <span className="date">2020.05.24</span>

        <div className="news-text">
          <h2>Krisha Kops on the the Health Impact Fund in TAZ</h2>

          <p>
            Denn überspitzt gesagt, kann es einem Unternehmen, das nur für den
            Verkauf eines Mittels entlohnt wird, statt für dessen Effektivität,
            herzlich egal sein, was das Medikament an- oder ausrichtet. Zudem wäre
            eine Firma daran interessiert, seinen Kundenstamm zu erhalten, was ein
            Fortbestehen der Krankheit voraussetzt. Würde die Firma hingegen ihr
            Medikament beim Health Impact Fund melden, erhielten sie den
            Hauptertrag durch den maximalen Gesundheitsgewinn, sprich die
            Ausrottung der Krankheit.
          </p>
          <p>
            Read more:{" "}
            <a href="https://taz.de/Corona-und-die-Pharmaindustrie/!5684767/">
              TAZ
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/LeilaJanah.jpg" alt="Leila Janah" />
          <span className="caption">
            <a href="https://commons.wikimedia.org/wiki/File:Leila_Janah_(15313650137).jpg">
              Photo by Christopher Michel
            </a>
          </span>
        </div>

        <span className="date">2020.02.02</span>

        <div className="news-text">
          <h2>Leila Janah, IGH Co-Founder, 1982-2020</h2>

          <p>
            We mourn the passing of Leila Janah, one of the co-founders of{" "}
            <a href="/team">Incentives for Global Health</a>. She was brilliant,
            kind and passionate about improving our world. Leila helped to advance
            the Health Impact Fund concept both practically and intellectually. A
            true social entrepreneur, she founded{" "}
            <a href="https://twitter.com/Samasource">Samasource</a>, a company
            designed to enable impoverished people to work remotely on computer
            tasks in Africa and India. The company has provided well-paying jobs
            for over 11,000 people. She also developed a beauty products company
            LXMI which sourced products sustainably from Africa, while paying
            women workers fairly for their work.
            <br />
            <br />A humanitarian, an innovator, and a kind person who brought out
            the best in others, Leila will be deeply missed. Samasource has
            invited those who wish to honor Leila to make a donation to the{" "}
            <a href="https://www.givework.org/">GiveWork Challenge</a>.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/berlin_workshop.jpg" alt="Berlin Workshop" />
        </div>

        <span className="date">2019.11.13</span>

        <div className="news-text">
          <h2>Health Impact Fund Workshop Berlin</h2>

          <p>
            The Health Impact Fund was the topic of an important meeting in Berlin
            on November 13. Co-convened by Heidemarie Wieczorek-Zeul (former
            German Federal Minister of Economic Cooperation and Development) and
            Professor Thomas Pogge of Yale University, the workshop gathered
            experts from government, industry, civil society, foundations, and
            academia. Adroitly chaired by Sergius Seebohm, participants explored
            the Health Impact Fund and how to move a pilot forward. There was a
            strong consensus that the Health Impact Fund offered a way to
            reconcile the need to support innovation and the need for new drugs to
            be accessible everywhere.
          </p>
        </div>
      </div>

      <br />

      <div className="news-item">
        <span className="date">2019.09.25</span>

        <div className="news-text">
          <h2>UK Labour Party Medicines Platform calls for Delinkage</h2>

          <p>
            The UK Labour Party is now officially calling for a change to the way
            that we pay for medicines, so that prices are “delinked” from the cost
            of innovation. The Health Impact Fund is a unique, competitive form of
            delinkage that controls the rewards to innovators through a market
            mechanism.
          </p>

          <a
            className="news-download"
            href="/pdf/LabourUK_Medicines-For-The-Many.pdf"
          >
            <Icon />
            <span>
              MEDICINES FOR THE MANY:
              <br />
              Public Health before Private Profit
            </span>
          </a>
        </div>
      </div>

      <br />
      <br />

      <div className="news-item">
        <div className="photo-and-caption">
          <img src="/news/GordonBrown.jpg" alt="Gordon Brown" />
          <span className="caption">
            <a href="https://www.flickr.com/photos/26087974@N05/2794502401/in/photolist-5fWycT-73eyY4-K27DF5-7srBjU-5yrHsu-4pRJQ3-LxKie-6FQgRL-21YNA-7fuBBP-YrMnc-XLitE-4pB7az-22E6bwo-81ukoA-6qCvdA-5A2dWq-81raKp-3pqzmL-4W6Ldz-9e3DLE-7G3t1c-7KVkH-81uk3j-bnoTq-83tNQB-7KVx4-4WaZnb-65D1NB-YrMMT-4W6LHi-6byQ6F-E1Bbz-suznZz-7YLEhZ-7KUVL-7KV4s-4Wb2z9-4Wb5nG-5WEWkq-7GEke-bB7KBf-7KUXP-6Fcrgy-4Wb1ey-7JrU1-7KUFS-5AUF6y-6vuMmB-7KVda">
              Photo by Cory M. Grenier
            </a>
          </span>
        </div>

        <span className="date">2019.06.20</span>

        <div className="news-text">
          <h2>
            London meeting on the Health Impact Fund with the Rt Hon Gordon Brown
          </h2>

          <p>
            On 20 June 2019, a wide variety of stakeholders participated in a
            meeting on the Health Impact Fund proposal, the MVAC proposal, and
            antibiotic market entry rewards. These alternative and complementary
            mechanisms to support innovation showed the importance of new
            financing tools for pharmaceutical innovation in a variety of areas.
            The Rt Hon Gordon Brown offered incisive comments on the challenges of
            attracting political support in the current environment.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(News)
