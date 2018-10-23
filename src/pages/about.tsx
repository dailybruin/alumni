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
        Welcome to the official site of the Daily Bruin Alumni Network, a group
        devoted to supporting alumni of the UCLA Daily Bruin and student journalism
        at the university. The organization is an official affinity network of the
        UCLA Alumni Association.
      </p>
      <h2>Mission Statement</h2>
      <p>
        The Daily Bruin Alumni Network (the "DBAN") will actively engage the alumni of
        the Daily Bruin to serve as a robust community for all former staff members,
        in support of each other and The Bruin. The DBAN will provide funding, mentorship
        and professional development programs for aspiring student-journalists at UCLA,
        ensuring the excellence and longevity of The Bruin. The DBAN will encourage students
        to reach beyond UCLA, supporting community programs to advance news literacy and the
        free press.
      </p>
      <h2>History</h2>
      <p>
        The Daily Bruin Alumni Network's roots can be traced to 2016, when Lawrence Ma ('95)
        connected with 2016-17 Editor-in-Chief Tanner Walters ('18). Lawrence had earmarked
        a portion of his university donations for the Daily Bruin through UCLA Student Affairs,
        which transfers the money to ASUCLA and into The Bruin's independent finances.
      </p>
      <p>
        Tanner had already created a new student position on staff to help get alumni efforts off the
        ground and was developing a directory of alumni names from archive staff boxes.
      </p>
      <p>
        Working with the Daily Bruin and the UCLA Alumni Association over the next years, the network
        began to take shape. The DB alumni Facebook group was relaunched and alumni began to step up to
        join the Committee for the Daily Bruin Alumni Network. The group held its first events in 2018
        and received official recognition as an affinity network of the UCLA Alumni Association.
      </p>
      <p>
        Many attempts have been made over the past century to build an alumni association for the Daily Bruin.
        We have taken a number of steps to make this latest incarnation last in perpetuity. For example, The
        Bruin has committed to a permanent editor position in the student alumni director. By becoming an
        affinity network of the UCLA Alumni Association, the network has institutional support and expertise
        to build our numbers, maintain contact information and plan events.
      </p>
      <p>
        We hope you'll join us as we continue to write our history!
      </p>
      <h2>NETWORK COMPONENTS</h2>
      <p>
        A governing board consisting of Daily Bruin alumni oversees, manages and
        promotes the alumni network. Committees are in charge of the following projects:
      </p>
      <ul>
        <li>
          Maintaining a directory for communications, a dedicated DBAN website and an active
          social media presence. This includes private Facebook and LinkedIn groups for our alumni
          in all professions to network, reconnect, promote events and to share general updates and
          career opportunities.
        </li>
        <li>
          Planning an annual on-campus general meeting and reunion, featuring speakers, career panels
          and receptions for Daily Bruin alumni from all professions, to strengthen bonds among each
          other and with the current students.
        </li>
        <li>
          Building scholarship programs and fundraising campaigns to support the Daily Bruin and its staffers.
        </li>
        <li>
          Developing a mentorship program and career guidance by alumni in journalism and related fields,
          including support like advisory workshops and newspaper critiques.
        </li>
      </ul>
      <p>Please check out our "Volunteer" page to see more.</p>
      <h2>WHY SUPPORT THE DAILY BRUIN?</h2>
      <p>
        The Daily Bruin has had to undergo significant changes in recent years due to steadily- declining advertising
        revenue. To maintain daily publication, The Bruin has had to seek funding from student fees in 2009 and 2016.
        To limit rent costs, the Kerckhoff Hall office was reduced to about half its previous size in 2017. The full-time
        student media advisor position was eliminated, and the rest of the professional staff has been reduced to just three
        positions. Editor stipends have fallen sharply, requiring many staff members to take additional jobs.
      </p>
      <p>
        The future of journalism depends on the continued success of college newspapers like the Daily Bruin, training the next
        generation of journalists and media professionals. To see how the DBAN and its members can help The Bruin, please visit
        our "Give Back" page.
      </p>
      <h2>THE WAY FORWARD</h2>
      <p>
        In 2019 – the centennial of UCLA and the Daily Bruin – we will work to build our board and committees. With official UCLA
        Alumni Association recognition as an affinity alumni network, we are prepared to hit the ground running for our goals and objectives.
      </p>
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
