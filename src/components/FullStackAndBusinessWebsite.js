import React from 'react'
import image from '../assets/fullstack.png'
import '../Styles/FullStack.css'

const FullStackAndBusinessWebsite = () => {
  return (
    <div className='fbody'>
        <div className='fcard'>
            <div className='circle'></div>
            <img src={image} alt="full stack app"/>
            <div className='content'>
              <h2>Full-Stack App</h2>
                <p>
                 JAVA Springboot backend, React frontend and MySQL database to store employee details. 
                 This app implements all the CRUD functionalities and makes use of Springboot REST API and AXIOS.
                </p>
                <a href='https://react-frontend-fullstack.herokuapp.com/employees' target="_blank" rel="noopener noreferrer"> Visit App</a>

            </div>
        </div>
    </div>
  )
}

export default FullStackAndBusinessWebsite