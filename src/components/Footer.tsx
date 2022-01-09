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
        <p className="c-footer__footer__copyright">{content.copyright}</p>
        <div className="c-footer__footer__links">
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
