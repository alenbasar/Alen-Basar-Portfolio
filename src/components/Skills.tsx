import React, { HTMLAttributes } from "react";
import DOMPurify from "dompurify";

export type SkillsContent = {
  heading: string;
  contents: {
    title: string;
    icon: string;
    techs: string[];
  }[];
};

type Props = {
  content: SkillsContent;
} & HTMLAttributes<HTMLDivElement>;

const Skills = (props: Props) => {
  const { className = "", content, ...restProps } = props;

  return (
    <React.Fragment>
      <section className={`c-skills ${className}`} {...restProps}>
        <h1 className="c-skills__heading">{content.heading}</h1>
        <div className="c-skills__grid">
          {content.contents.map(({ title, icon, techs }) => (
            <div key={title} className="c-skills__grid__card">
              <div
                className="c-skills__grid__card-icon"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(icon) }}
              />

              <h2>{title}</h2>
              <div className="c-skills__grid__card-techs">
                {techs.map((t) => (
                  <div
                    key={t}
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t) }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Skills;
