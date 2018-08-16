import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';

interface FeatureQuote {
  speaker: string;
  speakerClassInfo: string;
  speakerCurrentInfo: string;
  image: any;
  quote: string;
}

export default function FeatureQuote(props: FeatureQuote) {
  console.log(props.image);
  return (
    <section
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        align-items: center;
      `}
    >
      <div>
        <blockquote>"{props.quote}"</blockquote>
        <cite>
          <div>
            —{props.speaker}, {props.speakerClassInfo}
          </div>
          <div>{props.speakerCurrentInfo}</div>
        </cite>
      </div>
      <Img fluid={props.image} />
    </section>
  );
}
