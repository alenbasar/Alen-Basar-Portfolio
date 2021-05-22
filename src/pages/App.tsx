import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import data from "../data/settings.json";

const { banner, about, skills } = data.homepage;

const App = () => {
  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);
  const [skillsEntered, setSkillsEntered] = useState(false);

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
    </React.Fragment>
  );
};

export default App;
