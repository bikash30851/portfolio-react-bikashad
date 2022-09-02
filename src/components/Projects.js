import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";
import '../Styles/WorkStyle.css'

//import app1 from '../assets/app1.PNG'
// import app2 from '../assets/app2.PNG'
// import app3 from '../assets/app3.PNG'
// import app4 from '../assets/app4.PNG'

const breakPoints = [
  {width: 1, itemsToShow: 1},
]

const Item = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  @media (max-width: 800px) {
    background-size: 90%;
  }
  transition: 0.5s;
  @media(hover: hover){
    :hover{
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`

const PageWrapper = styled.div`
  height: calc(100vh - 3.65rem);
  min-height: calc(100vh - 3.65rem);
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: 70vh;
    width: 100%;
  }
  button {
    color: white;
  }
  .rec-pagination{
    button {
      background-color: white;
    }
  }
  #sort{
    background-image:url(${process.env.PUBLIC_URL + "app1.PNG" });
  }
  #game{
    background-image:url(${process.env.PUBLIC_URL + "app2.PNG"});
  }
  #todo{
    background-image:url(${process.env.PUBLIC_URL + "app3.PNG"});
  }
  #weather{
    background-image:url(${process.env.PUBLIC_URL + "app4.PNG"});
  }
  // @media (max-width: 800px) {
  // #sort{
  //   background-image:url(${process.env.PUBLIC_URL + "app1.PNG"});
  // }
  // #game{
  //   background-image:url(${process.env.PUBLIC_URL + "app2.PNG"});
  // }
  // #todo{
  //   background-image:url(${process.env.PUBLIC_URL + "app3.PNG"});
  // }
  // #weather{
  //   background-image:url(${process.env.PUBLIC_URL + "app4.PNG"});
  // }
  // }
`;

function Projects() {
  return (
    <>
    {/* <section>--> */}
    <div className="my-work" id="work">
        <h2 className="section__title section__title--work">Applications and Projects</h2>
        <p className="section__subtitle section__subtitle--work">A Collection Of My Projects</p>
    </div>
    {/* </section> */}
    <PageWrapper id="projects">
      <Carousel breakPoints={breakPoints}>
        <a href="https://profound-cocada-37823d.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="sort"></Item>
        </a>
        <a href="https://sensational-narwhal-82b1c8.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="game"></Item>
        </a>
        <a href="https://sparkly-lebkuchen-cc6687.netlify.app" target="_blank" rel="noopener noreferrer">
          <Item id="todo"></Item>
        </a>
        <a href="https://unique-biscotti-f6c041.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="weather"></Item>
        </a>
      </Carousel>
    </PageWrapper>
    </>
  );
}

export default Projects;