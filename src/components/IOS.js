import React from 'react'
import search from '../assets/search.png'

const IOS = () => {
  return (
    <div>
        <section className="intro">
        <h1 className="section__title section__title--intro">
            iOS Project <strong>Search App</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Written In Swift</p>
        <img src={search} alt="iOS Search App alt" className="intro__img"/>
    </section>

    <div className="portfolio__item--individual">
        <p>
            This is a search application that allows the users to search for specific text and if the database
            has items pertaining to this search, it will be displayed in the screen. I have designed a user
            friendly interface, where a user could type the text that they wish to search and obtain results based
            on it. Although the data could be stored in a database like firebaset, here it is simply stored in an array
            of arrays. Because of the capacity restriction, there are only 5 alts pertaining to
            each search. If the text entered by the user matches the topic of the item stored in the array, it is
            displayed in the screen and user has the ability to view next or previous alts.

        </p>
        <img src={search} alt="iOS Search App alt" className="item__main--alt"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada luctus mauris eu luctus.
            Aenean cursus ut tellus a luctus. Quisque non diam a tellus vehicula pellentesque. Aliquam tincidunt
            pulvinar purus, vel vestibulum magna rutrum vel. Curabitur fringilla neque tincidunt velit interdum
            facilisis. Aenean lacinia pharetra pharetra. Nunc lobortis velit sed enim condimentum, nec cursus
            tortor vehicula. Maecenas eget diam at leo tempus sodales. Nam id dolor euismod velit iaculis
            rutrum. Nam convallis fermentum suscipit. Quisque hendrerit ligula elementum, egestas urna non,
            tincidunt risus. Suspendisse pellentesque eros id maximus pharetra. Suspendisse augue velit, luctus
            sit amet enim eu, fringilla porttitor lectus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada luctus mauris eu luctus.
            Aenean cursus ut tellus a luctus. Quisque non diam a tellus vehicula pellentesque. Aliquam tincidunt
            pulvinar purus, vel vestibulum magna rutrum vel. Curabitur fringilla neque tincidunt velit interdum
            facilisis. Aenean lacinia pharetra pharetra. Nunc lobortis velit sed enim condimentum, nec cursus
            tortor vehicula. Maecenas eget diam at leo tempus sodales. Nam id dolor euismod velit iaculis
            rutrum. Nam convallis fermentum suscipit. Quisque hendrerit ligula elementum, egestas urna non,
            tincidunt risus. Suspendisse pellentesque eros id maximus pharetra. Suspendisse augue velit, luctus
            sit amet enim eu, fringilla porttitor lectus.
        </p>
    </div>



    </div>
  )
}

export default IOS