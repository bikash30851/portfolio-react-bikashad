import React from 'react'
//import bitcoin from '../assets/bitcoin.png'
import image from '../assets/image4.png'

const SAC = () => {
  return (
    <div>
        <section className="intro">
        <h1 className="section__title section__title--intro">
            AJR Concert <strong>Student Activites Council</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Northwest Missouri State University</p>
        <img src={image} alt="Naca Live alt" className = "intro__img"/>
    </section>

    <div className="portfolio__item--individual">
        <p>As a Graduate Assistant(GA) of the Student Activities Council, it was an honor to host the popular
            trio AJR, the band at Northwest Missouri State University. I advised and oversaw a team of student leaders
            and helped put together an army of student volunteers, who helped set up the stage, provide hospitatlity to 
            the artists and put on the greatest show for the Bearcats. 
        </p>
        <img src={image} alt=""/>
        <p>
            The Student Activities Council (SAC) at Northwest Missouri State University has announced it will welcome AJR to the campus as the headliner of its spring concert with Careless Vibez joining the event as the opening act.  

            The concert is set for Friday, April 8, in the Carl and Cheryl Hughes Fieldhouse. Doors will open at 6 p.m. with the concert beginning at 7 p.m.
            
            Student tickets are $10 in advance or $15 on the day of the concert. Tickets for the public are $20 in advance or $25 on the day of the show. Tickets are available now for purchase online at https://nwmissouri.universitytickets.com/w/.  
            
            SAC co-concert directors Rylie Goeders and Sherry Harper said the organization selected AJR as this year’s concert headliner after reviewing data from a student survey and reviewing popular artists in top genres.
            
            “We believe that AJR will provide a fun and engaging concert experience for Northwest students and the general public,” Goeders said. “They have a fun music style that allows a wide variety of people to enjoy their music.”
        </p>
        <p>
            
            Re-envisioning what pop can be in the 21st century, AJR has emerged as a ubiquitous hit-making outlier and one of the biggest indie bands in the world. Since 2012, the multiplatinum indie pop trio – comprised of brothers Adam, Jack and Ryan Met – have generated billions of streams while earning one triple-platinum single, one double-platinum single, four platinum singles, and one platinum album.
            
            “Neotheater,” released in 2019 marked their biggest first-week debut, peaking at No. 8 on the Billboard Top 200, No. 1 on the Top Alternative Albums Chart and No. 1 on the Top Rock Albums Chart. Spotify touted their 2017 single, “Sober Up,” among the “Best Rock Songs of the 2010s,” while Apple Music included 2016’s “Weak” on its “Best Alt Songs of the 2010s.” AJR also remains one of the “500 Most-Listened to Artists” on Spotify.
            
            On the heels of “Neotheater,” 2020 platinum blockbuster “Bang!” earned performances on “Today” and “The Ellen DeGeneres Show” as well as at the Macy’s Thanksgiving Day Parade. 
            
        </p>
    </div>


    </div>
  )
}

export default SAC