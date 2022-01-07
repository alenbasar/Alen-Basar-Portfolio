import React, { useState, HTMLAttributes } from "react";
import { emailService } from "../constants/api";

export type ContactContent = {
  heading: string;
  description: string[];
  cta: string;
  ctaLink: string;
  form: {
    heading: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    cta: string;
  };
};

type Props = {
  content: ContactContent;
} & HTMLAttributes<HTMLDivElement>;

const Contact = (props: Props) => {
  const { className = "", content, ...restProps } = props;
  const { heading, description, cta, ctaLink, form } = content;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    const emailData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      companyName: company,
      agent: "alenbasar.d@gmail.com",
      receiver: "alenbasar.d@gmail.com",
    };

    setFirstName("");
    setLastName("");
    setCompany("");
    setEmail("");
    setMessage("");

    try {
      const data = await fetch(emailService, {
        method: "POST",
        body: JSON.stringify(emailData),
      });
      const res = await data.json();
      if (res.error) throw new Error("");
      console.log("message sent");
      console.log(JSON.stringify(emailData));
    } catch (e) {
      console.log("something went wrong");
      console.log(JSON.stringify(emailData));
    }
  }

  return (
    <section className={`c-contact ${className}`} {...restProps}>
      <div className="c-contact__heading">
        <h2>{heading}</h2>
      </div>
      <div className="c-contact__content">
        <div className="c-contact__content__intro">
          {description.map((dsc) => (
            <p key={dsc} className="c-contact__content__intro__description">
              {dsc}
            </p>
          ))}
          <form action={ctaLink}>
            <input
              type="submit"
              value={cta}
              className="c-contact__content__intro__cta"
            />
          </form>
          {/* <Link to={ctaLink} className="c-contact__intro__cta">
          {cta}
        </Link> */}
        </div>
        <div className="c-contact__content__divider" />
        <form
          onSubmit={(e) => submitHandler(e)}
          className="c-contact__content__form"
        >
          <p></p>
          <p></p>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={form.firstNamePlaceholder}
            required
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={form.lastNamePlaceholder}
            required
          />
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={form.companyPlaceholder}
          />
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={form.emailPlaceholder}
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={form.messagePlaceholder}
            rows={5}
            required
          />
          <button className="c-contact__content__form-cta" type="submit">
            {form.cta}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
