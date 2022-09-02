import React from 'react'
import '../Styles/Services.css'

const Services = () => {
  return (
    <div>
        <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
            <div className="service">
                <h3>Front-End</h3>
                <p>
                    React: My choice of frontend
                    framework is React mostly because of it's modularity and wide range of libraries.
                    I enjoy working on the front-end and admire expressive website designs.  I am proficient 
                    in HTML, CSS, JavaScript, BootStrap and React.
                </p>
            </div>
            <div className="service">
                <h3>Back-End</h3>
                <p> JAVA: My choice of backend framework is Springboot and programming language is Java. I have experience
                    developing REST APIs in Springboot and connecting it to the React front-end client using axios. I have experience
                    with Python as well.
                </p>
            </div>

            <div className="service">
                <h3>Database</h3>
                <p>
                    SQL: SQL is my go-to language of choice when is comes to database management. I am familiar with firebase, 
                    MongoDB and the workings of relational database. My choice for database management is MySQL.

                </p>
            </div>

        </div>
        <a href="#work" className="btn">See My Work</a>
    </section>


    </div>
  )
}

export default Services