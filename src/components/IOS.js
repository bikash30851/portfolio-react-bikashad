import React from 'react'
import search from '../assets/search.png'

const IOS = () => {
  return (
    <div>
        {/* <section className="intro">
            <h1 className="section__title section__title--intro">
                iOS Project <strong>Search App</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Written In Swift</p>
            <img src={search} alt="iOS Search App alt" className="intro__img"/>
        </section> */}

        <section className="itemintro">
            <h1 className="itemsection__title itemsection__title--intro">
                iOS and Android<strong>Mobile Applications</strong>
            </h1>
            <p className="itemsection__subtitle itemsection__subtitle--intro">Written In Java and Swift</p>
            <img src={search} alt="iOS Search App alt" className = "itemintro__img"/>
        </section>

    <div className="portfolio__item--individual">
        <p>
            I have developed multiple iOS and Android mobile applications. These application are built on
            Swift and JAVA programming languages using XCode and Android Studio IDE. All of the mobile applications
            that I have built are hosted on my github. Two of the favorite applications that I have built are the 
            iOS Bookworm application and the Android Student Attendance Tracking System Application. 
        </p>
        <ol>
            <li>iOS Bookworm Application</li>
            <li>Student Attendance Tracting Android Application</li>
        </ol>
        <h3>1. iOS Bookworm Application</h3>
        <a href="https://github.com/bikash30851/ios-bookworm-app" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-success" style={{padding:"10px", margin:"25px"}}>Code Repository</button>
        </a>
        <div className='flexbox'>
            <div className='flexTextL'>
                <p>
                    The iOS Bookworm application comprises of 6 total screens/views. The first screen is a landing page where users can login in
                    with a user ID and password that is registered with the database of the application. If the users do not have an account, 
                    they will be prompted to create a new account by registering. In the next screen a TabBarController is implemented with
                    three tab bar items, Home, Books and the Wishlist/recommendation tab. 
                </p>
                <h3>Segues</h3>
                <ol>
                    <li>Home: Pressing the Home button segues the user to a screen with their user profile information and other general settings. 
                        Home page also has a button to log out.
                    </li>
                    <li>Books: Pressing the Books button segues the user into a table-view with all the 10 books that are present in the database 
                        of the application. 
                    </li>
                    <li>
                        Wishlist: The Wishlist button segues the user to recommend/Wishlist a book by entering the name of the book and its title. 
                    </li>
                </ol>
            </div>
            <img src={search} alt="iOS Search App alt" className="item__main--image"/>
        </div>
    
        <p>
            The book screen has a table-view with the list of all the books available and when the user selects a book from the table view, 
            it will segue into a page where they will be able to read the pdf version of the book that is available. The scroll for the table
            view is vertical and the reading page also has a vertical scroll. 
        </p>


        <h3>2. Student Attendance Tracking Android Application</h3>
        <a href="https://github.com/bikash30851" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-success" style={{padding:"10px", margin:"25px"}}>Code Repository</button>
        </a>
        <p>
            This application is under rigorous construction and should be ready by December 2022. Please check back
            for updates.
        </p>



    </div>



    </div>
  )
}

export default IOS