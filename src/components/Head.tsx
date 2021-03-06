import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title: string;
  pageTitle?: string;
  description: string;
  url: string;
  twitter: string;
}

function Head(props: HeadProps) {
  const title = props.pageTitle
    ? `${props.pageTitle} | ${props.title}`
    : props.title;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.description} />

      {/* TODO: favicons! */}

      <link rel="canonical" href={props.url} />

      {/* Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={title} />
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:url" content={props.url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.description} />
      {/* <meta name="twitter:image" content="https://example.com/image.jpg" /> */}

      <html lang="en" />
    </Helmet>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            twitter
          }
        }
      }
    `}
    render={data => <Head {...data.site.siteMetadata} {...props} />}
  />
);
