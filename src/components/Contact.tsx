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
  //   const [mailResponse, setMailResponse] = useState("");
  //   const [errorMailResponse, setErrorMailResponse] = useState("");

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
      // subject: "",
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
      <div className="c-contact__intro">
        <h2 className="c-contact__intro__heading">{heading}</h2>
        {description.map((dsc) => (
          <p key={dsc} className="c-contact__intro__description">
            {dsc}
          </p>
        ))}
        <a href={ctaLink} className="c-contact__intro__cta">
          {cta}
        </a>
      </div>
      <div className="c-contact__divider" />
      <form onSubmit={(e) => submitHandler(e)} className="c-contact__form">
        <h2>{form.heading}</h2>
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
        <button
          className="c-contact__form-cta o-btn--alternative"
          type="submit"
        >
          {form.cta}
        </button>
      </form>
    </section>
  );
};

export default Contact;
