import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import styled from 'react-emotion';
import MobilePopup from './MobilePopup';

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    color: #4a98e2;
  }
`;

const HeaderLinks = () => (
  <>
    <HeaderLink to="/about">About</HeaderLink>
    <HeaderLink to="/join-us">Join Us</HeaderLink>
    <HeaderLink to="/volunteer">Volunteer</HeaderLink>
    <HeaderLink to="/give-back">Give Back</HeaderLink>
    <HeaderLink to="news-and-events">News & Events</HeaderLink>
    <HeaderLink to="/contact">Contact</HeaderLink>
  </>
);

export default function Header() {
  return (
    <header
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        padding: 1.1rem 1.2rem;
        position: fixed;
        top: 0;
        background-color: #fff;
        z-index: 100;
        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.125);
        border-bottom-color: #f3f3f3;
      `}
    >
      <HeaderLink
        to="/"
        className={css`
          justify-self: start;
        `}
      >
        <span
          className={css`
            font-weight: bold;
            text-transform: uppercase;
          `}
        >
          Daily Bruin
        </span>{' '}
        Alumni Network
      </HeaderLink>
      <nav
        className={css`
          display: flex;
          justify-content: space-between;
          @media (max-width: 940px) {
            display: none;
          }
        `}
      >
        <HeaderLinks />
      </nav>
      <MobilePopup>
        <HeaderLinks />
      </MobilePopup>
    </header>
  );
}
