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

const { banner, about, skills, showcase, contact, footer } = data.homepage;

const App = () => {
  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);
  const [skillsEntered, setSkillsEntered] = useState(false);
  const [showcaseEntered, setShowcaseEntered] = useState(false);

  const sectionAnimatedClass = "animate__animated is-section-animated";

  return (
    <React.Fragment>
      <Header logo={data.logo} />

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
      <br />

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
      <br />

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
      <br />

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
      <br />
      <Contact content={contact} />

      <Footer content={footer} />
    </React.Fragment>
  );
};

export default App;
