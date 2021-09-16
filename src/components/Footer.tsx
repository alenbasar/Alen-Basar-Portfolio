import React, { HTMLAttributes } from "react";
import { footerMenu } from "../constants/menu";

type Props = {
  content: {
    copyright: string;
  };
} & HTMLAttributes<HTMLDivElement>;

const Footer = (props: Props) => {
  const { content } = props;
  return (
    <footer className="c-footer">
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
  );
};

export default Footer;
