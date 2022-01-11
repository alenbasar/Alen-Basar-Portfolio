import { HTMLAttributes } from "react";

export type TextOutroContent = {
  heading: string;
  text: string[];
  cta: string;
  ctaLink: string;
};

type Props = {
  content: TextOutroContent;
} & HTMLAttributes<HTMLDivElement>;

const TextOutro = (props: Props) => {
  const { className = "", content, ...restProps } = props;
  const { heading, cta, ctaLink } = content;

  return (
    <section className={`c-outro ${className}`} {...restProps}>
      <h1 className="c-outro__heading">{heading}</h1>
      {/* {text.map((txt) => (
            <h4 key={txt} className="">
            {txt}
            </h4>
        ))} */}
      {/* <form action={ctaLink}>
        <input type="submit" value={cta} className="c-outro__cta" />
      </form> */}
      <a
        href={ctaLink}
        className="c-outro__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta}
      </a>
    </section>
  );
};

export default TextOutro;
