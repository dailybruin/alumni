import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageContentProps {
  title: string;
  featureImage?: any;
  children?: React.ReactNode;
}

export default function PageContent(props: PageContentProps) {
  return (
    <>
      <Head pageTitle={props.title} />
      <Header />
      <section
        className={css`
          padding: 6rem 3rem 4rem 3rem;
          background-color: #f3f3f3;
          height: 100%;
        `}
      >
        <header
          className={css`
            max-width: 35rem;
            margin: 0 auto 3rem auto;
            text-align: center;
          `}
        >
          <div
            className={css`
              display: inline-block;
              width: 6.5rem;
              height: 0.25rem;
              margin: 0 0 1.5rem 0;
              border-radius: 4px;
              background-color: #4a98e2;
            `}
          />
          <h1
            className={css`
              margin: 0;
              font-size: 2.75rem;
              line-height: 1.3;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              font-family: 'Raleway', Helvetica, sans-serif;
              font-weight: 800;
              color: #3f3f3f;
            `}
          >
            {props.title}
          </h1>
        </header>
        <div
          className={css`
            background-color: #fff;
            border-radius: 4px;
          `}
        >
          {!!props.featureImage && (
            <Img
              fluid={props.featureImage}
              className={css`
                border-radius: 4px;
              `}
            />
          )}
          <div
            className={css`
              color: #3f3f3f;
              padding: 3rem 4rem;
              > *:last-child {
                margin-bottom: 0;
              }
              font-weight: 300;
              font-family: 'Source Sans Pro';
              line-height: 1.6;

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: 'Raleway', Helvetica, sans-serif;
                font-weight: 800;
                line-height: 1.5;
                margin: 0 0 1rem 0;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                width: 100%;
              }

              h1 {
                font-size: 2.75rem;
                line-height: 1.3;
              }

              h2 {
                font-size: 2.25rem;
                line-height: 1.3;
              }

              h3 {
                font-size: 1.5rem;
              }

              h4 {
                font-size: 1.1rem;
              }

              h5 {
                font-size: 0.9rem;
              }

              h6 {
                font-size: 0.7rem;
              }

              a {
                transition: color 0.2s ease-in-out,
                  border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                border-bottom: dotted 1px;
                text-decoration: none;
                color: inherit;

                &:hover {
                  border-bottom-color: transparent;
                  color: #4a98e2;
                }
              }
            `}
          >
            {props.children}
          </div>
        </div>
      </section>
      <Footer
        githubName="alumni"
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  );
}
