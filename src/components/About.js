import React from 'react'
import '../Styles/AboutStyle.css'
import image from "../assets/standing.png";

const About = () => {
  return (
    <div>
        <div className="styling">
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">Hi! It's nice to meet you</h2>
                <p className="section__subtitle section__subtitle--about"><b>Glad you are here. </b></p>
                <div className="about-me__body">
                    <p>
                        I am Bikash, a graduate student from Nepal. I am currently pursuing
                        my Master's Degree in Applied Computer Science and I will be graduating December 2022. 
                        I am currently working as a Graduate Assistant for the Office of Student Involvement
                        at Northwest Missouri State University. 
                    </p>
                    <p>
                        I am passionate about programming and building useful applications. I possess strong
                        coding skills in Java, Python, JavaScript, SQL, HTML and CSS. My academic devotion, research and
                        experience has helped me develop strong analytical and problem-solving skills and I 
                        believe that I am ready to take on the challenges of the real world software development. 
                    </p>
                </div>
                <img src={image} alt="standing" className="about-me__img"/>
            </section>
        </div>        
    </div>
  )
}

export default About

