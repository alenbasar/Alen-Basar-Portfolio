import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import data from "../data/settings.json";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import TextOutro from "../components/TextOutro";

const { banner, about, skills, showcase, contact, textOutro, footer } =
  data.homepage;

const App = () => {
  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);
  const [skillsEntered, setSkillsEntered] = useState(false);
  const [showcaseEntered, setShowcaseEntered] = useState(false);
  const [contactEntered, setContactEntered] = useState(false);

  const sectionAnimatedClass = "animate__animated is-section-animated";

  return (
    <React.Fragment>
      <Header logo={data.logo} />
      <div className="o-nav-spacer" />

      <Waypoint onEnter={() => setBannerEntered(true)} />
      <Banner
        id="home"
        className={`${
          bannerEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : "is-hidden"
        }`}
        pageTitle
        content={banner}
      />
      <Waypoint onEnter={() => setBannerEntered(true)} />
      <div className="o-spacer" />

      <Waypoint onEnter={() => setAboutEntered(true)} />
      <About
        id="about"
        className={`${
          aboutEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : "is-hidden"
        }`}
        content={about}
      />
      <Waypoint onEnter={() => setAboutEntered(true)} />
      <div className="o-spacer" />

      <Waypoint onEnter={() => setSkillsEntered(true)} />
      <Skills
        id="skills"
        className={`${
          skillsEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : "is-hidden"
        }`}
        content={skills}
      />
      <Waypoint onEnter={() => setSkillsEntered(true)} />
      <div className="o-spacer" />

      <Waypoint onEnter={() => setShowcaseEntered(true)} />
      <Showcase
        id="showcase"
        className={`${
          showcaseEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : "is-hidden"
        }`}
        content={showcase}
      />
      <Waypoint onEnter={() => setShowcaseEntered(true)} />
      <div className="o-spacer" />
      {/* <div className="o-spacer" /> */}

      <Waypoint onEnter={() => setContactEntered(true)} />
      <Contact
        className={`${
          contactEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : "is-hidden"
        }`}
        content={contact}
        id="contact"
      />
      <Waypoint onEnter={() => setContactEntered(true)} />
      <div className="o-spacer" />

      <TextOutro content={textOutro} id="textOutro" />
      <div className="o-spacer" />
      <div className="o-spacer" />

      <Footer content={footer} />
    </React.Fragment>
  );
};

export default App;
