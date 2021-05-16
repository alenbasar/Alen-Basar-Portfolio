import React, { HTMLAttributes } from 'react';
import { Link } from 'react-scroll';
import { ScrollSettings } from '../constants/scrollSettings';

export type AboutContentProps = {
  image: string;
  heading: string;
  subheading: string;
  aboutText: string[];
  cta: string;
  ctaLink: string;
};

type Props = {
  content: AboutContentProps;
} & HTMLAttributes<HTMLDivElement>;
const About = (props: Props) => {
  const { className = '', content, ...restProps } = props;
  const { image, heading, subheading, aboutText, cta, ctaLink } = content;

  return (
    <section className={`c-about ${className}`} {...restProps}>
      <div className="c-about__about-info">
        <h1 className="c-about__about-info-heading">{heading}</h1>
        <h3 className="c-about__about-info-subheading">{subheading}</h3>
        {aboutText.map((about) => (
          <h3 key={about} className="c-about__about-info-text">
            {about}
          </h3>
        ))}
        <Link
          className="c-about__about-info-cta o-button--alternative"
          to={ctaLink}
          {...ScrollSettings}
        >
          {cta}
        </Link>
      </div>
      <img className="c-about__image" src={image} alt="about page" />
      {/* <video
        className="c-about__background"
        src={image}
        autoPlay
        loop
        muted
      ></video> */}
    </section>
  );
};

export default About;
