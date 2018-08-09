import * as React from 'react';
import { Link } from 'gatsby';
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
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
          `}
        >
          <div
            className={css`
              text-align: center;
              padding: 2rem 0;
              background-color: #4a98e2;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              `}
            >
              <h1>Daily Bruin</h1>
              <span>Alumni Network</span>
              <Link
                to="/join-us"
                className={css`
                  display: block;
                  border-radius: 4px;
                  border: 0;
                  cursor: pointer;
                  font-size: 0.75rem;
                  height: 3rem;
                  width: 140px;
                  line-height: 3.075rem;
                  padding: 0 2.5rem;
                  text-align: center;
                  text-transform: uppercase;
                  letter-spacing: 0.025rem;
                  background-color: #ffb300;
                  color: #fff;
                  :hover {
                    background-color: #ffcc59;
                  }
                `}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
