import React from 'react'
import './contact.css'
import{MdOutlineMail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import{ useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>devabedbashir@gmail.com</h5>
            <a href="mailto:devabedbashir@gmail.com" target="_blank">Send A Message</a>
          </article>          
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Abed Bashir</h5>
            <a href="https://m.me/abed.bachir" target="_blank">Send A Message</a>
          </article>          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+96176757831" target="_blank">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact