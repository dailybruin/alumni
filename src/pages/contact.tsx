import * as React from 'react';
import { graphql } from 'gatsby';

import PageContent from '../components/PageContainer';

export const query = graphql`
  query ContactPageQuery {
    featureImage: file(relativePath: { regex: "/kerck-2.jpg/" }) {
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
    <PageContent title="Contact" featureImage={featureImage}>
      <p>
        Here are some resources to stay connected with the Daily Bruin Alumni Network
        and the current Daily Bruin staff. Please reach out with any questions!
      </p>
      <h2>Contacts</h2>
      <ul>
        <li><a href="mailto:LawrenceMa@alumni.ucla.edu">Lawrence Ma</a>{' '} ('95) Daily Bruin Alumni Network co-chair</li>
        <li><a href="mailto:tannerbwalters@gmail.com">Tanner Walters</a>{' '} ('18) Daily Bruin Alumni Network co-chair</li>
        <li><a href="mailto:alumni@dailybruin.com">Jacqueline Alvarez</a>{' '}, 2018-19 Daily Bruin alumni director</li>
      </ul>
      <h2>Social Media</h2>
      <h3>Daily Bruin</h3>
      <ul>
        <li><a href="https://www.facebook.com/groups/dailybruin">Facebook</a></li>
        <li><a href="https://twitter.com/dailybruin">Twitter</a></li>
        <li><a href="https://www.instagram.com/dailybruin/">Instagram</a></li>
      </ul>
      <h3>Daily Bruin Alumni Network</h3>
      <ul>
        <li><a href="https://www.facebook.com/groups/DailyBruinAlumni/">Official Facebook group</a></li>
        <li><a href="https://www.linkedin.com/groups/2499544/about">Official LinkedIn group</a></li>
      </ul>
    </PageContent>
  );
}
