import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4p83jj', 'template_6avx1xl', form.current, 'ZjJohyHhrcDxvW_nN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         <article className="contact__option">
           <MdOutlineEmail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>mouli1216@gmail.com</h5>
           <a href="mailto:mouli1216@gmail.com">Send a message</a>
         </article>
         <article className="contact__option">
           <AiFillLinkedin className='contact__option-icon'/>
           <h4>LinkedIn</h4>
           <h5>mouli-ghosh-10b6861bb</h5>
           <a href="https://www.linkedin.com/in/mouli-ghosh-10b6861bb/" target='_blank'>Send a message</a>
         </article>
         <article className="contact__option">
           <BsWhatsapp className='contact__option-icon'/>
           <h4>Message</h4>
           <h5>+91-#########</h5>
           <a href="https://api.whatsapp.com/send?phone=7063058068" target='_blank'>Send a message</a>
         </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    
      </div>
    </section>
  )
}

export default Contact
