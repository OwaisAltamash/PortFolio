import React from 'react';
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Owais</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/owais-altamash-06a22b239"><FaLinkedin /></a>
        <a href="https://github.com/OwaisAltamash"><FaGithub /></a>
        <a href="https://instagram.com/_altaf.exe_?igshid=NTc4MTIwNjQ2YQ=="><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Owais. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;