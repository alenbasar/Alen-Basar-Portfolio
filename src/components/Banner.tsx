import React, { HTMLAttributes } from 'react';
import { Link } from 'react-scroll';
import { ScrollSettings } from '../constants/scrollSettings';
// import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
// import ParticleConfig from '../data/particlesjs-config';

export type BannerContent = {
  heading: string;
  subheading: string[];
  cta: string;
  ctaLink: string;
};
type Props = {
  pageTitle?: boolean;
  content: BannerContent;
} & HTMLAttributes<HTMLDivElement>;

const Banner = (props: Props) => {
  const { className = '', content, pageTitle, ...restProps } = props;
  const { heading, subheading, cta, ctaLink } = content;

  return (
    <section className={`c-banner ${className}`} {...restProps}>
      {/* <video
        className="c-banner__video"
        src={background}
        autoPlay
        loop
        muted
      ></video> */}

      <div className="c-banner__content">
        {pageTitle ? (
          <h1 className="c-banner__content-title">{heading}</h1>
        ) : (
          <h2 className="c-banner__content-title">{heading}</h2>
        )}
        {subheading.map((s) => (
          <h1 className="c-banner__content-text" key={s}>
            {s}
          </h1>
        ))}
        <Link
          className="c-banner__content-cta o-btn"
          to={ctaLink}
          {...ScrollSettings}
        >
          {cta}
        </Link>
      </div>
      <Particles
        className="c-banner__particles"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            size: {
              value: 2,
            },
            color: {
              value: '#b5179e',
            },
            lineLinked: {
              enable: true,
              distance: 210,
              color: '#b5179e',
              opacity: 1,
              width: 1.3,
            },
            shape: {
              polygon: {
                nb_sides: 4,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              outMode: 'bounce',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
            },
          },
          polygon: {
            move: {
              radius: 10,
            },
          },
        }}
        width="1920px"
      />
    </section>
  );
};

export default Banner;
