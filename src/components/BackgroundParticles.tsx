import Particles from "react-particles-js";

const BackgroundParticles = () => {
  return (
    <div className="c-background">
      <Particles
        className="c-background__particles"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            size: {
              value: 2,
            },
            color: {
              value: "#b5179e",
            },
            lineLinked: {
              enable: true,
              distance: 210,
              color: "#b5179e",
              opacity: 1,
              width: 1.3,
            },
            shape: {
              polygon: {
                nb_sides: 4,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              bounce: true,
              outMode: "bounce",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
            },
          },
          polygon: {
            move: {
              radius: 10,
            },
          },
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
