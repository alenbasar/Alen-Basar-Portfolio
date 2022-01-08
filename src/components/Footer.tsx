import React, { HTMLAttributes } from "react";
import { footerMenu } from "../constants/menu";

type Props = {
  className: string;
  content: {
    copyright: string;
  };
} & HTMLAttributes<HTMLDivElement>;

const Footer = (props: Props) => {
  const { content, className } = props;
  return (
    <section className={`c-footer ${className}`}>
      <footer className="c-footer__footer">
        <p>{content.copyright}</p>
        <div>
          {footerMenu.map((i) => (
            <a
              key={i.key}
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
