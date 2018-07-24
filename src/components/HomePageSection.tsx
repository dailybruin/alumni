import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import Header from './Header';

const style = css`
  z-index: -1;
`;

export default class HomePageSection extends React.Component<any, {}> {
  render() {
    return (
      <section>
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          praesentium quae blanditiis autem explicabo beatae dicta dolorum
          nihil, in animi corrupti deleniti est ea sint itaque veniam
          voluptatibus nobis saepe?
        </p>
      </section>
    );
  }
}
