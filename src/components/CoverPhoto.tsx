import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import Header from './Header';

const style = css`
  z-index: -1;
`;

export default class CoverPhoto extends React.Component<any, {}> {
  render() {
    return (
      <>
        <Img
          className={style}
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            height: '100vh',
          }}
          fluid={this.props.image}
        />
        <Header />
        <div
          className={css`
            margin-bottom: 100vh;
          `}
        />
      </>
    );
  }
}
