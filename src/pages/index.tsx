import * as React from 'react';
import { graphql } from 'gatsby';
import 'normalize.css';

import CoverPhoto from '../components/CoverPhoto';
import HomePageSection from '../components/HomePageSection';

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
      <section>
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          praesentium quae blanditiis autem explicabo beatae dicta dolorum
          nihil, in animi corrupti deleniti est ea sint itaque veniam
          voluptatibus nobis saepe?
        </p>
        <h3>Subheader</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          accusamus reiciendis laborum dolorem natus? Dolorum laborum similique
          quas iusto! Tempora quo officia laboriosam quisquam perferendis
          tenetur temporibus minima necessitatibus quidem.
        </p>
        <button>Learn More</button>
      </section>
      {/* <Img /> */}
      <section>
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          praesentium quae blanditiis autem explicabo beatae dicta dolorum
          nihil, in animi corrupti deleniti est ea sint itaque veniam
          voluptatibus nobis saepe?
        </p>
        <button>Give</button>
      </section>
      <section>
        <h2>Connect</h2>
      </section>
      <section>
        <h2>ALUMNI SPOTLIGHT</h2>
      </section>
      <section>
        <h2>WHAT ARE ALUMNI UP TO?</h2>
      </section>
      <section>
        <h2>News</h2>
      </section>
    </>
  );
};
export default IndexPage;
