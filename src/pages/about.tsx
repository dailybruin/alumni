import * as React from 'react';
import { graphql } from 'gatsby';

import PageContainer from '../components/PageContainer';
import FeatureQuote from '../components/FeatureQuote';

export const query = graphql`
  query AboutPageQuery {
    featureImage: file(relativePath: { regex: "/papers-header.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 320, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    speakerImage: file(relativePath: { regex: "/matea.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function ContactPage({ data }) {
  const featureImage = data.featureImage.childImageSharp.fluid;
  const speakerImage = data.speakerImage.childImageSharp.fluid;

  return (
    <PageContainer title="About" featureImage={featureImage}>
      <p>
        The Daily Bruin Alumni Network (the "DBAN") will actively engage the
        alumni of the Daily Bruin to serve as a robust community for all former
        staff members, in support of each other and The Bruin. The DBAN will
        provide funding, mentorship and professional development programs for
        aspiring student-journalists at UCLA, ensuring the excellence and
        longevity of The Bruin. The DBAN will encourage students to reach beyond
        UCLA, supporting community programs to advance news literacy and the
        free press.
      </p>
      <h2>Program Components</h2>
      <h3>Alumni Engagement</h3>
      <ul>
        <li>
          A governing board consisting of Daily Bruin alumni, the current
          student alumni relations director and current student editor in chief
          to oversee, manage and promote the DBAN.
        </li>
        <li>
          An annual on-campus general meeting and reunion, featuring speakers,
          career panels and receptions for Daily Bruin alumni from all
          professions, to strengthen bonds among each other and with the current
          students.
        </li>
        <li>
          A dedicated DBAN website, as well as active social media engagement,
          including private Facebook and LinkedIn groups, for our alumni in all
          professions to network, to reconnect, to promote our events and to
          share general updates and career opportunities.
        </li>
      </ul>
      <h3>Mentorship and Development</h3>
      <ul>
        <li>
          Pro bono advisory workshops and newspaper critiques offered by alumni
          practicing journalists and media professionals for current Daily Bruin
          students and staff.
        </li>
        <li>
          Mentorship program and career guidance by alumni in journalism and
          related fields.
        </li>
        <li>
          Scholarship to fund original student journalism of global reach and
          impact.
        </li>
        <li>
          Work with academic departments like Communications Studies and English
          to bolster professional advising and develop journalism courses for
          student-journalists.
        </li>
      </ul>
      <h3>Community Engagement and Service</h3>
      <ul>
        <li>
          The Daily Bruin News Literacy Project: With alumni funding and
          support, Daily Bruin advisors and staffers will regularly give back to
          the community by going to local middle schools and high schools to
          give workshops on the freedom of the press, journalism's role in
          democracy and general news literacy.
        </li>
      </ul>
      <h3>Alumni Funding/Endowment</h3>
      <p>
        The Daily Bruin has had to undergo significant changes in recent years
        due to steadily- declining advertising revenue. To maintain daily
        publication, The Bruin has had to seek funding from student fees in 2009
        and 2016. To limit rent costs, the Kerckhoff Hall office was reduced to
        about half its previous size in 2017. The full-time student media
        advisor position was eliminated, and the rest of the professional staff
        has been reduced to just three positions. Editor stipends have fallen
        sharply, requiring many staff members to take additional jobs.
      </p>
      <p>
        The future of journalism depends on the continued success of college
        newspapers like the Daily Bruin, training the next generation of
        journalists and media professionals. Here are the ways the DBAN and its
        members can financially support the Daily Bruin:
      </p>
      <ul>
        <li>
          The Daily Bruin Support Fund (#63255O): All alumni can earmark a
          portion or all of their annual UCLA giving to this official UCLA
          Office of Scholarships & Student Support Initiatives fund, created
          specifically to enhance the news-gathering and operational
          capabilities (such as equipment and travel) at the Daily Bruin.
        </li>
        <li>
          The Daily Bruin Alumni Scholarship & Endowment: Pitch and attract both
          high-dollar donations and regular alumni support, to establish an
          endowment to fund an alumni scholarship for student-journalists
          pursuing original reporting projects of global reach and impact, and
          to provide additional professional mentoring and advising to better
          position our student-staffers for the future job market in the media
          and related fields.
        </li>
      </ul>
      <h3>The Way Forward</h3>
      <ul>
        <li>
          Spring & Summer 2018 - Recruit and assemble a founding alumni working
          group to set up the organizational structure and develop programs and
          benchmarks for the first 2-4 years. With the current Daily Bruin
          staff, this group would help plan and host the first general meeting
          and alumni reunion.
        </li>
        <li>
          Fall 2018 - The first annual general meeting and reunion of the Daily
          Bruin Alumni Network on Friday, October 5, 2018, in Westwood.
        </li>
        <li>
          The Centennial and Beyond: In 2019, the centennial of UCLA and the
          Daily Bruin, we will work toward gaining official UCLA Alumni
          Association recognition as an affinity alumni network and fully
          implement the above-stated goals and objectives.
        </li>
      </ul>
      <h2>Alumni Spotlight</h2>
      <FeatureQuote
        speaker="Matea Gold"
        speakerClassInfo="1994-95 editor-in-chief, class of '96"
        speakerCurrentInfo="Political enterprise and investigations editor, The Washington Post"
        image={speakerImage}
        quote="The Daily Bruin launched my career as a professional journalist. On the day I walked into the newsroom in Kerckhoff Hall as a freshman, I began learning how to cover a large, diverse community and how to apply principles of fairness and rigor to high-stakes stories. I saw the huge impact that a student newspaper could have in shaping not just campus discourse, but major national news events. I often tell aspiring reporters that the only way to learn how to be a journalist is to do the work, day in and day out. That’s what I had the chance to do at the Daily Bruin, and I will be forever grateful for the experience."
      />
    </PageContainer>
  );
}
