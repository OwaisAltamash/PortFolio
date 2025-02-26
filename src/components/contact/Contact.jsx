import React from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {

    emailjs.sendForm('service_wb4l5am', 'template_qwtmepj', form.current, 'j9VEXFWLekLb3R67W')
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Emails</h4>
            <h5>altafkhann7860@gmail.com</h5>
            <a href="mailto:altafkhann7860@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_altaf._exe_</h5>
            <a href="https://instagram.com/_altaf.exe_?igshid=NTc4MTIwNjQ2YQ==" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8700943793</h5>
            <a href="https://api.whatsapp.com/send?phone=918700943793" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* ##################### END OF CONTACT__OPTIONS #####################  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;