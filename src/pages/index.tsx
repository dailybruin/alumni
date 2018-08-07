import * as React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import Img from 'gatsby-image';

import Button from '../components/Button';
import CoverPhoto from '../components/CoverPhoto';
import HomePageSection from '../components/HomePageSection';
import Footer from '../components/Footer';

export const query = graphql`
  query IndexQuery {
    coverphoto: file(relativePath: { regex: "/kerck.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    classOf2018: file(relativePath: { regex: "/class-of-18-newspapers.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <CoverPhoto image={data.coverphoto.childImageSharp.fluid} />
      <HomePageSection title="Welcome">
        <p>
          Thousands of UCLA students have called Kerckhoff Hall home for the
          past century. In that time, the Daily Bruin has trained young
          journalists and produced generations of media-savvy Bruins. As the
          organization enters its second century, we want to support and foster
          that endeavor.
        </p>
        <h3>Mission</h3>
        <p>
          The Daily Bruin Alumni Network will actively engage the alumni of the
          Daily Bruin to serve as a robust community for all former staff
          members, in support of each other and The Bruin. The DBAN will provide
          funding, mentorship and professional development programs for aspiring
          student-journalists at UCLA, ensuring the excellence and longevity of
          The Bruin. The DBAN will encourage students to reach beyond UCLA,
          supporting community programs to advance news literacy and the free
          press.
        </p>
        <Button>Learn More</Button>
        <Img fluid={data.classOf2018.childImageSharp.fluid} />
      </HomePageSection>

      <HomePageSection title="Connect" theme={1}>
        <ul
          className={css`
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 58rem;
            display: flex;
            justify-content: space-evenly;
            list-style: none;
          `}
        >
          <li>Join Us</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
      </HomePageSection>

      <HomePageSection title="What are alumni up to?">
        <a
          className="twitter-timeline"
          data-height="600"
          href="https://twitter.com/tannerbwalters/lists/ucla-daily-bruin-alumni?ref_src=twsrc%5Etfw"
        >
          A Twitter List by tannerbwalters
        </a>
      </HomePageSection>
      <Footer
        githubName="alumni"
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  );
};
export default IndexPage;
