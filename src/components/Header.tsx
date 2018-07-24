import * as React from 'react';
import { css } from 'emotion';

export default function Header() {
  return (
    <header
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        width: 100%;
      `}
    >
      <div
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
      </div>
      <nav
        className={css`
          justify-self: end;
        `}
      >
        <a href="">About</a>
        <a href="">Join Us</a>
        <a href="">Give Back</a>
        <a href="">News & Events</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
