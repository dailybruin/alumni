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
        Over 500 UCLA students staff the Daily Bruin, serving thousands in the
        campus and Westwood community every day. We hope you’ll join us in
        staying connected with the campus and your fellow alumni!
      </p>
      <p>
        On social media, please be sure you join the Facebook group for Daily
        Bruin Alumni. In addition, you can follow the Daily Bruin on Twitter,
        Facebook and Instagram to keep up with all of the current campus
        happenings.
      </p>
      <p>
        Please email Tanner Walters with any alumni network questions at
        alumni@dailybruin.com. Tanner graduated in 2018. He was the 2016-17
        editor in chief and the 2017-18 alumni director.
      </p>
    </PageContent>
  );
}
