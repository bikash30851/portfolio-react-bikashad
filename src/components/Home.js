import React, { useCallback} from 'react'
import '../Styles/HomeStyle.css'
import image from '../assets/wbearcat.png'
//import '../particles/particles.css'
import styled from "styled-components/macro";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';


const PageWrapper = styled.div`
    height: calc(100vh - 3.65rem);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Styling canvas background generated by particles.js */
    div {
      filter: brightness(1);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      height: calc(100vh - 3.65rem) !important;
      width: 100% !important;
      position: absolute;
      z-index: 0;

    }

    // h1 {
    //   color: white;
    //   position: relative;
    //   z-index: 11;
    //   font-size: 3rem;
    //   font-family: 'Playfair Display', serif;
    //   user-select: none;
    //   padding-bottom: 6rem;
    //   text-shadow: 2px 2px 4px black;
    //   pointer-events: none;
    //   span {
    //     color: #d91b6a;
    //   }
    // }
  `;

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);
  return (
    <PageWrapper id="home">
      {/* Sets particles in the background */}
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#303030",
          },
        },
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong><span>B</span>ikash <span>Ad</span>hikari</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">A full-stack software developer</p>
            <img src={image} alt="Naca Live" className = "intro__img"/>
        </section>
    </PageWrapper>
  );
}

export default Home;

