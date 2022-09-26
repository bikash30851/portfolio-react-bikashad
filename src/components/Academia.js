import React from 'react'
import '../Styles/WorkStyle.css'
import { Link } from 'react-router-dom'
// import search from '../assets/search.png'
// import bitcoin from '../assets/bitcoin.png'
// import ai from '../assets/ai.png'
// import image4 from '../assets/image4.png'

const Academia = () => {
  return (
    <div>
        <div className="my-work" id="work">
            <h2 className="section__title section__title--work">Academia and Experience</h2>
            <p className="section__subtitle section__subtitle--work">A Collection Of My Academic Work</p>
        </div>   
        <div style={{fontSize:"90%"}} className='container'>
            <div  className='card'>
                <div className='card-image card-1'></div>
                <h2 >Data</h2>
                <p>
                    Machine Learning project where I analyzed a cryptocurrency dataset, cleaned unstructured data
                    and applied classification models and algorithms. Explore Project Code and Poster.
                    
                </p>
                <Link className='card-a' to={`/card-bitcoin`}> READ MORE </Link>
                {/* <a href=''>READ MORE</a> */}
            </div>
            <div className='card'>
                <div className='card-image card-2'></div>
                <h2>Apps</h2>
                <p>
                    A range of IOS applications like Bookworm, search and resume app. Student Attendance Tracking
                    System Android Application. Explore the app functionality and code on my github.
                </p>
                <Link className='card-a' to={`/card-apps`}> READ MORE </Link>
                {/* <a href=''>READ MORE</a> */}
            </div>
            <div className='card'>
                <div className='card-image card-3'></div>
                <h2>SAC</h2>
                <p>
                    I worked as a Graduate Assistant for Student Activities Council(SAC) at Northwest 
                    Missouri State University. We put on some great events. See pictures by clicking below!
                </p>
                <Link className='card-a' to={`/card-sac`}> READ MORE </Link>
                {/* <a href=''>READ MORE</a> */}
            </div>
            <div className='card'>
                <div className='card-image card-4'></div>
                <h2>Research</h2>
                <p>
                    I am currently working on two research projects with my professors. Research topics include
                    Reinforcement Learning, time optimization and big data.
                </p>
                <Link className='card-a' to={`/card-research`}> READ MORE </Link>
                {/* <a href=''>READ MORE</a> */}
            </div>

        </div>
    </div>
  )
}

export default Academia

