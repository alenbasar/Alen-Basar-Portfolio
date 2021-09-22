import React, { HTMLAttributes } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dompurify from "dompurify";
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
  icons: {
    git: string;
    link: string;
  };
};

type Props = {
  content: ShowcaseContent;
} & HTMLAttributes<HTMLDivElement>;

const Showcase = (props: Props) => {
  const { className = "", content, ...restProps } = props;

  return (
    <section className={`c-showcase ${className}`} {...restProps}>
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
                <ul>
                  <li>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(content.icons.link),
                      }}
                      className="c-showcase__grid__card-cta-link"
                    ></a>
                  </li>
                  <li>
                    <a
                      href={sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(content.icons.git),
                      }}
                      className="c-showcase__grid__card-cta-git"
                    ></a>
                  </li>
                </ul>
                {/* {website && (
                  
                )}
                {sourceCode && (
                  
                )} */}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Showcase;
