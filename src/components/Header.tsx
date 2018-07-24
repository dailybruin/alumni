import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';

const HeaderLink = styled('a')`
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
        href="/"
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
        <HeaderLink href="">About</HeaderLink>
        <HeaderLink href="">Join Us</HeaderLink>
        <HeaderLink href="">Give Back</HeaderLink>
        <HeaderLink href="">News & Events</HeaderLink>
        <HeaderLink href="">Contact</HeaderLink>
      </nav>
    </header>
  );
}
