import React, { HTMLAttributes, useState } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lightbox from "./Lightbox";

export type ShowcaseContent = {
  heading: string;
  contents: {
    images: string[];
    title: string;
    description: string[];
    stack: string[];
    website?: string;
    sourceCode?: string;
  }[];
};

type Props = {
  content: ShowcaseContent;
} & HTMLAttributes<HTMLDivElement>;

const Showcase = (props: Props) => {
  const { className = "", content, ...restProps } = props;

  return (
    <section className={`c-showcase`} {...restProps}>
      <h1 className="c-showcase__title">{content.heading}</h1>
      <div className="c-showcase__grid">
        {content.contents.map(
          ({ images, title, description, stack, website, sourceCode }) => (
            <div className="c-showcase__grid__card" key={title + description}>
              <div className="c-showcase__grid__card-image-wrapper">
                <Lightbox
                  imgClassName="c-showcase__grid__card-image"
                  views={images.map((img) => ({ source: img }))}
                />
              </div>

              <div className="c-showcase__grid__card-content">
                <a
                  className="c-showcase__grid__card-content-title"
                  href={sourceCode || website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{title}</h3>
                </a>
                {description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
              <div className="c-showcase__grid__card-stack">
                {stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="c-showcase__grid__card-cta">
                {website && (
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} className="svg-link" />
                  </a>
                )}
                {sourceCode && (
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="svg-git" />
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Showcase;
