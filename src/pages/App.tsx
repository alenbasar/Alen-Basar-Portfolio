import React, { useState, useEffect } from "react";
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
import Loader from "../components/Loader";
import BackgroundParticles from "../components/BackgroundParticles";

const { banner, about, skills, showcase, contact, textOutro, footer } =
  data.homepage;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);
  const [skillsEntered, setSkillsEntered] = useState(false);
  const [showcaseEntered, setShowcaseEntered] = useState(false);
  const [contactEntered, setContactEntered] = useState(false);
  const [textOutroEntered, setTextOutroEntered] = useState(false);
  const [footerEntered, setFooterEntered] = useState(false);

  const sectionAnimatedClass = "animate__animated is-section-animated";

  // const randLoadingTime = Math.floor(Math.random() * (4500 - 2500 + 1) + 2500);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2550);
  }, []);

  return (
    <div className={`page-app${!loading ? " is-loaded" : ""}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackgroundParticles />
          <React.Fragment>
            <Header logo={data.logo} />

            <Waypoint onEnter={() => setBannerEntered(true)} />
            <Banner
              id="home"
              className={`${
                bannerEntered
                  ? `${sectionAnimatedClass} animate__fadeIn`
                  : "is-hidden"
              }`}
              pageTitle
              content={banner}
            />
            <Waypoint onEnter={() => setBannerEntered(true)} />
            <div className="o-spacer" />

            {/* About  */}
            <Waypoint onEnter={() => setAboutEntered(true)} />
            <About
              id="about"
              className={`${
                aboutEntered
                  ? `${sectionAnimatedClass} animate__fadeInLeftBig`
                  : "is-hidden"
              }`}
              content={about}
            />
            <Waypoint onEnter={() => setAboutEntered(true)} />
            <div className="o-spacer" />

            {/* Skills */}
            <Waypoint onEnter={() => setSkillsEntered(true)} />
            <Skills
              id="skills"
              className={`${
                skillsEntered
                  ? `${sectionAnimatedClass} animate__zoomInUp`
                  : "is-hidden"
              }`}
              content={skills}
            />
            <Waypoint onEnter={() => setSkillsEntered(true)} />
            <div className="o-spacer" />

            {/* Showcase */}
            <Waypoint onEnter={() => setShowcaseEntered(true)} />
            <Showcase
              id="showcase"
              className={`${
                showcaseEntered
                  ? `${sectionAnimatedClass} animate__fadeInRightBig`
                  : "is-hidden"
              }`}
              content={showcase}
            />
            <Waypoint onEnter={() => setShowcaseEntered(true)} />
            <div className="o-spacer" />

            <Waypoint onEnter={() => setContactEntered(true)} />
            <Contact
              id="contact"
              className={`${
                contactEntered
                  ? `${sectionAnimatedClass} animate__fadeInLeftBig`
                  : "is-hidden"
              }`}
              content={contact}
            />
            <Waypoint onEnter={() => setContactEntered(true)} />
            <div className="o-spacer" />

            <Waypoint onEnter={() => setTextOutroEntered(true)} />
            <TextOutro
              className={`${
                textOutroEntered
                  ? `${sectionAnimatedClass} animate__bounceInDown`
                  : "is-hidden"
              }`}
              content={textOutro}
            />
            <div className="o-spacer" />

            <Waypoint onEnter={() => setFooterEntered(true)} />
            <Footer
              className={`${
                footerEntered
                  ? `${sectionAnimatedClass} animate__bounceInRight`
                  : "is-hidden"
              }`}
              content={footer}
            />
          </React.Fragment>
        </>
      )}
    </div>
  );
};

export default App;
