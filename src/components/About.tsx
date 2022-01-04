import React, { HTMLAttributes } from "react";

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
  const { className = "", content, ...restProps } = props;
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
        <a
          className="c-about__about-info-cta o-button--alternative"
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </div>
      <img className="c-about__image" src={image} alt="about page" />
    </section>
  );
};

export default About;
