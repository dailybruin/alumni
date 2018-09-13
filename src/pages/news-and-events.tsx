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
  }
`;

export default function NewsAndEventsPage({ data }: any) {
  const image = data.eventImage.childImageSharp.fluid;
  return (
    <PageContainer title="Events" featureImage={image}>
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
            The Daily Bruin Alumni Network is excited to host its first alumni
            reunion on the UCLA campus this fall!
          </p>
          <p>
            <a href="http://giving.ucla.edu/2018DailyBruinReunion">
              Please RSVP here.
            </a>
          </p>
          <hr />
          <p>
            Join us Friday afternoon for an open newsroom and breakout sessions
            with past and present Daily Bruin staffers. Panels will include
            discussions with Los Angeles Times reporters who are adjusting to a
            new office and new ownership. The current managing team will discuss
            the latest news around campus and how things are going at The Bruin.
            For students, sessions will include a careers panel.
          </p>
          <p>
            That evening, we will gather in the James West Alumni Center for a
            reception and dinner program, which will feature the Daily Bruin
            Alumni Network's first Distinguished Alumni honoree and updates from
            the organizational leadership and fundraising committees.
          </p>
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
