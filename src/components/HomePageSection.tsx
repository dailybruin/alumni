import * as React from 'react';
import { css } from 'emotion';
import { colors } from '../utils/global-styles';

enum Theme {
  LIGHT,
  DARK,
}

export default function HomePageSection(props: any) {
  return (
    <section
      className={css`
        background-color: ${props.theme === Theme.DARK
          ? colors.black_background
          : colors.offwhite};
        color: ${props.theme === Theme.DARK ? colors.white : colors.black_text};
        height: 100%;
        padding: 6rem 3rem 4rem 3rem;
      `}
    >
      <div
        className={css`
          max-width: 35rem;
          margin: 0 auto 3rem auto;
          text-align: center;
        `}
      >
        <header>
          <div
            className={css`
              display: inline-block;
              width: 6.5rem;
              height: 0.25rem;
              margin: 0 0 1.5rem 0;
              border-radius: 4px;
              background-color: ${colors.blue};
            `}
          />
          <h2
            className={css`
              margin: 0 0 1rem;
              font-size: 2.75rem;
              line-height: 1.3;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              font-family: 'Raleway', Helvetica, sans-serif;
              font-weight: 800;
            `}
          >
            {props.title}
          </h2>
        </header>
        {props.children}
      </div>
    </section>
  );
}
