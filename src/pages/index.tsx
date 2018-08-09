import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Button from '../components/Button';
import CoverPhoto from '../components/CoverPhoto';
import HomePageSection from '../components/HomePageSection';
import Footer from '../components/Footer';
import FeatureQuote from '../components/FeatureQuote';

const Icon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

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
    gary: file(relativePath: { regex: "/gary.jpg/" }) {
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
      </HomePageSection>
      <Img fluid={data.classOf2018.childImageSharp.fluid} />

      <HomePageSection title="Give Back">
        <p>
          The Daily Bruin, like media organizations across the country, has
          faced significant financial challenges as advertising revenue
          continues to drop. Support from alumni allows the organization to
          bolster its reporting through travel, equipment and scholarship
          opportunities.
        </p>
        <Button>Give</Button>
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
          <li>
            <Link to="/join-us">
              <Icon icon={faCoffee} />
              <h3>Join Us</h3>
            </Link>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/126873934036600/">
              <Icon icon={faFacebook} />
              <h3>Facebook</h3>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/groups/2499544/profile">
              <Icon icon={faLinkedinIn} />
              <h3>LinkedIn</h3>
            </a>
          </li>
        </ul>
      </HomePageSection>

      <HomePageSection title="Alumni Spotlight">
        <FeatureQuote
          speaker="Gary E. Knell ’75"
          speakerClassInfo="Viewpoint Editor 1975"
          speakerCurrentInfo="Chief Executive Officer, National Geographic Partners"
          image={data.gary.childImageSharp.fluid}
          quote="The Daily Bruin was the core of my education at UCLA.  It taught me how to write, how to take criticism, how to organize teams, and provided an avenue to question authority constructively.  It’s important to nurture and save in this ‘post truth’ era. There’s never been a more important time to promote these attributes."
        />
      </HomePageSection>

      <HomePageSection title="What are alumni up to?" theme={1}>
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
