import React, {useRef} from 'react'
import '../Styles/ContactStyle.css'
import contact from '../assets/contact.png'
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAIL_JS_API_KEY}`)
          .then((result) => {
              console.log(result.text);
              alert("Message Sent Successfully!")
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    
  return (
    <div>
        <section className="contact" id="contact">
            <div className = "contact-form">
                <h1>Contact <span>Me</span></h1>
                <p>Feel free to send me a message. I would love to collaborate on exciting projects.</p>
               
                <form ref={form} onSubmit={sendEmail}>
                    <input name='user_name' placeholder="Your Name" id="name" required/>
                    <input type="email" name="user_email" id="email" placeholder="xyz@email.com" required/>
                    <input name='subject' placeholder="Subject" required/>
                    <textarea name="message" id="message" cols="30" rows="10" 
                        placeholder="Please type your message here." required>
                    </textarea>
                    <input type="submit" name="" value="Submit" className="cbtn"/>
                </form>
            </div>
            <div className="contact-img">
                <img src={contact} alt="contact-img"/> 
            </div>
        </section>
    </div>
  )
}


export default Contact