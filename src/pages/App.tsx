import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import settings from '../data/settings.json';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import data from '../data/settings.json';

const { banner, about } = data.homepage;

const App = () => {
  const [bannerEntered, setBannerEntered] = useState(false);
  const [aboutEntered, setAboutEntered] = useState(false);

  const sectionAnimatedClass = 'animate__animated is-section-animated';

  return (
    <React.Fragment>
      <Header logo={data.logo} />

      <Waypoint onEnter={() => setBannerEntered(true)} />
      <Banner
        id="home"
        className={`${
          bannerEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : 'is-hidden'
        }`}
        pageTitle
        content={banner}
      />
      <br></br>
      <Waypoint onEnter={() => setAboutEntered(true)} />
      <About
        id="about"
        className={`${
          aboutEntered
            ? `${sectionAnimatedClass} animate__backInDown`
            : 'is-hidden'
        }`}
        content={about}
      />
    </React.Fragment>
  );
};

export default App;
