import React from 'react'
import '../Styles/ContactStyle.css'
import contact from '../assets/contact.png'


const Contact = () => {
    
  return (
    <div>
        <section className="contact" id="contact">
            <div className = "contact-form">
                <h1>Contact <span>Me</span></h1>
                <p>Feel free to send me a message. I would love to collaborate on exciting projects.</p>
                <form onSubmit={() => {/*sendEmail(); reset(); return false;*/}} action="">
                    <input type="" placeholder="Your Name" id="name" required/>
                    <input type="email" name="email" id="email" placeholder="xyz@email.com" required/>
                    <input type="" placeholder="Subject" required/>
                    <textarea name="" id="message" cols="30" rows="10" 
                        placeholder="Please type your message here.">
                    </textarea>
                    <input type="submit" name="" value="Submit" className="btn"/>
                </form>
            </div>
            <div className="contact-img">
                <img src={contact} alt="contact-img"/> 
            </div>
            {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
        </section>
    </div>
  )
}

// function sendEmail(){
//     Email.send({
//     SecureToken: "bd9c4e3d-4f1f-4213-9842-7af1735fa92d",
//     To : 'bikash30851@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New Portfolio Contact Form Inquiry",
//     Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value + 
//             + "<br> Message: " + document.getElementById("message").value
// }).then(
// message => alert("Message Sent Successfully!")
// );
// }

export default Contact