import React from "react";
import styled from "styled-components/macro";
import {FaLinkedin, FaInstagram, FaFacebook, FaCopyright, FaGithub} from "react-icons/fa";

const IconContainer = styled.ul`
  width: 100%;
  background-color: #191919;
  display:flex;
//   color: white;
  align-items: center;
  justify-content: space-evenly;
  a {
    color:var(--clr-accent);
    text-decoration:none;
    /* margin: 0 10vw; */
    transition: transform 1s;
    // margin: 2rem 0;
  }
  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    /* transition: transform 0.5s; */
    transition: color 1s;
  }
  @media(hover: hover){
    svg:hover {
      color: orange;
      /* transform: scale(1.50); */
    }
    a:hover {
      color: #FFA500;
      transform: rotateY(360deg)
    }
  } 
`

const Copyright = styled.div`
  background-color: #191919;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--clr-accent);
  padding-bottom: 1rem;
`

const PageWrapper = styled.div`
    padding-top: 1em;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        color:  var(--clr-accent);
        text-decoration: none;
        font-size: 120%;
    }

  `;

  const FooterEmail = styled.div`
    @media(hover: hover){
        a:hover {
            text-decoration: underline;
            color: orange;
            font-weight
        }
    }  
    `;

const Footer = () => {
    return (
        <PageWrapper>
            <FooterEmail>
                <a href="mailto:bikash30851@gmail.com">bikash30851@gmail.com</a>
            </FooterEmail>
          <IconContainer>
            <a href="https://github.com/bikash30851" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bikashad/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/atombun_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/bikash.adhikari.583" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </IconContainer>
          <Copyright>Bikash Adhikari&nbsp;<FaCopyright/>&nbsp;2021</Copyright>
        </PageWrapper>
      );
    }

export default Footer;