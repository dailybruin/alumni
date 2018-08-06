import * as React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import 'normalize.css';

import CoverPhoto from '../components/CoverPhoto';
import HomePageSection from '../components/HomePageSection';
import Footer from '../components/Footer';

export const query = graphql`
  query IndexQuery {
    image: file(relativePath: { regex: "/kerck.jpg/" }) {
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
      <CoverPhoto image={data.image.childImageSharp.fluid} />
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
        <button>Learn More</button>
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

      <HomePageSection title="News" />
      <Footer
        githubName="alumni"
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  );
};
export default IndexPage;
