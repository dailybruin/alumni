import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import styled from 'react-emotion';

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    color: #4a98e2;
  }
`;

export default function Header() {
  return (
    <header
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        width: 100%;
        padding: 2.5rem 1.75rem 0;
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
        `}
      >
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/join-us">Join Us</HeaderLink>
        <HeaderLink to="/give-back">Give Back</HeaderLink>
        <HeaderLink to="news-and-events">News & Events</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </nav>
    </header>
  );
}
