import * as React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HomePageIconLinkProps {
  link: string;
  title: string;
  icon: any;
}

export default function HomePageIconLink(props: HomePageIconLinkProps) {
  const isInternalLink = /^\/(?!\/)/.test(props.link);

  const style = css`
    color: white;
    text-decoration: none;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;

    &:hover {
      color: #4a98e2;
    }
  `;
  const content = (
    <>
      <FontAwesomeIcon
        className={css`
          font-size: 5rem;
          margin-bottom: 0.6rem;
        `}
        icon={props.icon}
      />
      <h3>{props.title}</h3>
    </>
  );

  if (isInternalLink) {
    return (
      <Link className={style} to={props.link}>
        {content}
      </Link>
    );
  } else {
    return (
      <a className={style} href={props.link}>
        {content}
      </a>
    );
  }
}
