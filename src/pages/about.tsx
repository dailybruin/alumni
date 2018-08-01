import * as React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import PageContent from '../components/PageContainer';

export const query = graphql`
  query AboutPageQuery {
    featureImage: file(relativePath: { regex: "/papers-header.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 320, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function ContactPage({ data }) {
  const featureImage = data.featureImage.childImageSharp.fluid;

  return (
    <>
      <Header />
      <PageContent title="About" featureImage={featureImage}>
        <p>
          The Daily Bruin Alumni Network (the "DBAN") will actively engage the
          alumni of the Daily Bruin to serve as a robust community for all
          former staff members, in support of each other and The Bruin. The DBAN
          will provide funding, mentorship and professional development programs
          for aspiring student-journalists at UCLA, ensuring the excellence and
          longevity of The Bruin. The DBAN will encourage students to reach
          beyond UCLA, supporting community programs to advance news literacy
          and the free press.
        </p>
      </PageContent>
    </>
  );
}
