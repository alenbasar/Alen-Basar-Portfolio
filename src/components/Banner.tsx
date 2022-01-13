import React, { HTMLAttributes } from "react";
import { Link } from "react-scroll";
import { ScrollSettings } from "../constants/scrollSettings";
// import Particles from "react-particles-js";

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
  const { className = "", content, pageTitle, ...restProps } = props;
  const { heading, subheading, cta, ctaLink } = content;

  return (
    <section className={`c-banner ${className}`} {...restProps}>
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
    </section>
  );
};

export default Banner;
