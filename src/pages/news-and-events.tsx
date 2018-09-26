import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import PageContainer from '../components/PageContainer';

export const query = graphql`
  query NewsAndEventsQuery {
    eventImage: file(relativePath: { regex: "/alumni.ADX.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 320, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scheduleImage: file(relativePath: { regex: "/alumni-schedule.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cariImage: file(relativePath: { regex: "/cari.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function NewsAndEventsPage({ data }: any) {
  const eventImage = data.eventImage.childImageSharp.fluid;
  const scheduleImage = data.scheduleImage.childImageSharp.fluid;
  const cariImage = data.cariImage.childImageSharp.fluid;

  return (
    <PageContainer title="Events" featureImage={eventImage}>
      <div
        className={css`
          display: grid;
          grid-template-columns: 1fr;
        `}
      >
        <div>
          <header>
            <span>2018</span>
            <h3>October 5-6</h3>
          </header>
          <p>
            Come back to Kerckhoff Hall to reconnect with fellow alumni and meet
            current Bruin staffers! We can't wait to see you.
          </p>
          <p>
            We are SOLD OUT of dinner tickets for the Daily Bruin Alumni Network
            reunion dinner. Please use{' '}
            <a href="http://giving.ucla.edu/2018DailyBruinReunion">this link</a>{' '}
            if you are interested in buying tickets to the afternoon sessions
            only.
          </p>
          <hr />
          <h4>Event Details</h4>
          <h5>Afternoon schedule</h5>
          <p>
            Join us Friday afternoon for an open newsroom and breakout sessions
            with past and present Daily Bruin staffers. Panels will include
            discussions with Los Angeles Times reporters who are adjusting to a
            new office and new ownership. The current managing team will discuss
            the latest news around campus and how things are going at The Bruin.
            For students, sessions will include a careers panel.
          </p>
          <p>See the full schedule outlined below:</p>
          <Img
            fluid={scheduleImage}
            className={css`
              margin-bottom: 1.45rem;
            `}
          />
          <h5>Alumni Dinner and Distinguished Alumni Award</h5>
          <p>
            That evening, we will gather in the James West Alumni Center for a
            reception and dinner program, which will feature Cari Champion, the
            Daily Bruin Alumni Network's first Distinguished Alumni Award
          </p>
          <p>
            Champion is one of only a few African-American women anchoring shows
            at ESPN, and she has become a trailblazer in media. Described as a
            “game-changer” by Vogue in 2016, she was one of two women named to
            Sports Illustrated’s prestigious list of Six to Watch in 2016 and
            was recently included in the Ebony Power 100 of 2017 for
            representing women in an industry dominated by men.
          </p>
          <p>
            <a href="https://alumni.ucla.edu/patrick-healy/">Patrick Healy</a>,
            an NBC4 Southern California reporter and Daily Bruin alumnus, will
            emcee the dinner.
          </p>
          <p>
            The network will offer updates from the organizational leadership
            and fundraising committees and there will be plenty of time to enjoy
            dinner with friends, old and new.
          </p>
          <Img
            fluid={cariImage}
            className={css`
              margin-bottom: 1.45rem;
            `}
          />
          <h5>Saturday activities</h5>
          <p>
            Join one of our meet-ups on Saturday, either to tailgate the UCLA
            football game in Pasadena or watch together in Westwood. Location
            specifics to come.
          </p>
          <p>
            Questions? Want to see who else is coming?{' '}
            <a href="http://www.facebook.com/events/315031935913662">
              Check out our Facebook event.
            </a>
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
