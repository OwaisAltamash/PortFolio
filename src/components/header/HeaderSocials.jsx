import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/owais-altamash-06a22b239" target='_blank'> <FaLinkedin /> </a>
        <a href="https://github.com/OwaisAltamash" target='_blank'> <FaGithub /> </a>
        <a href="https://instagram.com/_altaf.exe_?igshid=NTc4MTIwNjQ2YQ==" target='_blank'> <FaInstagram /> </a>
    </div>
  )
}

export default HeaderSocials;