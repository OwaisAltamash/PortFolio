import React from 'react';
import './about.css';
import ME from '../../assets/mee.jpg'
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1yrs of self Experience</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>4+ Clients</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>6+ Projects</small>
              </article>
            </div>

            <p>
            Hello and welcome! I'm Owais, a passionate and driven MERN stack developer excited to embark on a journey in the world of web development. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I am eager to contribute my skills and creativity to innovative projects and collaborate with like-minded individuals in the tech industry.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About;