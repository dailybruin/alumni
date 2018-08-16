import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import FeatureQuote from '../components/FeatureQuote';

export const query = graphql`
  query GiveBackPageQuery {
    featureImage: file(relativePath: { regex: "/db-staff.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 320, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    speakerImage: file(relativePath: { regex: "/crittendon.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function GiveBackPage({ data }) {
  const featureImage = data.featureImage.childImageSharp.fluid;
  const speakerImage = data.speakerImage.childImageSharp.fluid;

  return (
    <PageContainer title="Give Back" featureImage={featureImage}>
      <h2>Daily Bruin Support Fund</h2>
      <p>
        Gifts to UCLA can be{' '}
        <a href="https://giving.ucla.edu/campaign/?&amount=100&OrgType=C&OrgNum=11300&fund=63255O&_ga=2.58053994.1514647085.1524156737-359345519.1518723170">
          earmarked to this discretionary fund
        </a>{' '}
        for the Daily Bruin. Donations go through Student Affairs for UCLA
        Student Media within Associated Students UCLA.
      </p>
      <p>
        If your workplace matches gifts, please reach out so we can help
        facilitate your specific situation. Most corporate matches are eligible
        with this fund.
      </p>
      <h2>UCLA Student Media</h2>
      <p>
        The Daily Bruin is part of UCLA Student Media, which is overseen by the
        UCLA Communications Board. The Board is the independent publisher,
        manager and operator of the media organizations.
      </p>
      <p>
        All donations to the Daily Bruin or its sister media organizations are
        tax-deductible since UCLA Student Media is an independent, nonprofit
        organization with 501(c)(3) status. For your records, the federal
        taxpayer ID number for gifts to UCLA Student Media or any of its
        specific publications is 95-1777979.
      </p>
      <p>
        Please visit{' '}
        <a href="https://donate.uclastudentmedia.com/">this website</a> to give
        directly to the Daily Bruin.
      </p>
      <h2>Long-term Endowment</h2>
      <p>
        An endowment to supplement the Daily Bruin Support Fund would act as a
        means to help alleviate cuts The Bruin has undergone to its professional
        staff and operations. This would help provide academic scholarships for
        student journalists. Please contact Lawrence Ma (‘95) at{' '}
        <a href="mailto:LawrenceMa@alumni.ucla.edu">
          LawrenceMa@alumni.ucla.edu
        </a>{' '}
        with interest or questions.
      </p>
      <h2>Other Ways to Help</h2>
      <p>
        There is a wealth of journalistic and professional knowledge among Daily
        Bruin alumni. Please reach out to the DB alumni director if you’re
        interested in getting involved through workshops, critiques or other
        valuable journalistic services. We are committed to promoting news
        literacy on campus and in the greater Los Angeles community and always
        appreciate in-kind donations to help further that cause.
      </p>
      <FeatureQuote
        quote="Writing for the Daily Bruin got me out about campus and helped me to meet lots of people. I enjoyed the camaraderie in the newsroom and learning all about my new university. I also enjoyed honing my writing ability and the art of interviewing – skills that have helped me immensely in my 35 years as a lawyer."
        speaker="John Crittendon"
        speakerClassInfo="1977-78 staff reporter, class of '78"
        speakerCurrentInfo="Trademark and copyright lawyer, Cooley LLP; Adjunct assistant professor, UCLA Law"
        image={speakerImage}
      />
    </PageContainer>
  );
}
