import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import Footer from '../components/Footer';

export const query = graphql`
  query NewsAndEventsQuery {
    eventImage: file(relativePath: { regex: "/alumni.ADX.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function NewsAndEventsPage({ data }: any) {
  const image = data.eventImage.childImageSharp.fluid;
  return (
    <>
      <Header />
      <PageContainer title="Events">
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
          `}
        >
          <div>
            <header>
              <span>2018</span>
              <h3>Fall</h3>
            </header>
            <p>
              Save the date: The Daily Bruin Alumni Network will host its first
              reunion and general meeting at UCLA in the fall. This will be our
              formal group launch and will offer a chance to gather in Westwood
              and hear about the current staff. Stay tuned for an RSVP link.
            </p>
          </div>
          <Img fluid={image} />
        </div>
      </PageContainer>
      <Footer
        githubName="alumni"
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  );
}
